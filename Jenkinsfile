#!groovy

properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '7', numToKeepStr: ''))])

node {
    stage("Clean directory"){
        deleteDir()
    }

    stage("Checkout"){
        checkout scm
    }

    stage("Install dependencies & build"){
        sh "npm install"
        sh "npm run build"
    }

    stage("Run tests"){
        try{
            sh "npm i && npm run test:ci"
        }
        catch(err){
            junit "test/*.xml"
            throw err
        }
    }

     stage("release polaris logs repo") {
        echo "{$env.BRANCH_NAME}"
           if (env.BRANCH_NAME == 'master') {
                echo "release branch: {$env.BRANCH_NAME}"
                sh "npm run semantic-release"
           }
     }

     stage("Clean directory") {
           deleteDir()
     }
}
