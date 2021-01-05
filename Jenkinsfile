#!groovy

properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '7', numToKeepStr: ''))])

node {
    stage("Clean directory") {
        deleteDir()
    }

    stage("Checkout") {
        checkout scm
    }

    stage("Run CI?") {
            sh "git log -1 --pretty=%B > commitMessage"
            commitMessage = readFile 'commitMessage'
            if (commitMessage.contains('[skip ci]')) {
                echo "Skipping CI"
                currentBuild.result = 'SUCCESS'
            }
        }

        if (currentBuild.result != 'SUCCESS') {
            stage("Install dependencies & build") {
                sh "npm install"
        }

        stage("Run tests") {
            try {
                sh "npm t"
          }
          catch (err) {
              junit "test/*.xml"
              throw err
          }
        }

        stage("Release") {
            withCredentials([string(credentialsId:'GitHubToken', variable: 'GITHUB_TOKEN')]) {
               withCredentials([string(credentialsId:'NpmToken', variable: 'NPM_TOKEN')]) {
                   echo "${env.BRANCH_NAME}"
                   if ((env.BRANCH_NAME == 'master') || (env.BRANCH_NAME == 'development')) {
                       echo "release branch: ${env.BRANCH_NAME}"
                       sh "npx semantic-release"
                   }
               }
            }
        }
    }

    stage("Clean directory") {
          deleteDir()
    }
}
