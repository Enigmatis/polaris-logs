#!groovy

properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '7', numToKeepStr: ''))])

node {
    stage("Clean directory") {
        deleteDir()
    }

    stage("Checkout") {
        checkout scm
    }

    stage("Install dependencies & build") {
        sh "npm install"
    }

    stage("Run tests") {
        try {
            sh "npm run test"
        }
        catch (err) {
            junit "test/*.xml"
            throw err
        }
    }

     stage("Release") {
        echo "{$env.BRANCH_NAME}"
           if ((env.BRANCH_NAME == 'master') || (env.BRANCH_NAME == 'development')) {
                echo "release branch: ${env.BRANCH_NAME}"
                sh "npx run semantic-release"
           }
     }

     stage("Clean directory") {
           deleteDir()
     }
}
