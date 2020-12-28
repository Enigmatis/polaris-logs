#!groovy

properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '7', numToKeepStr: ''))])

node {
    agent any
    stages {
        stage("npm install") {
            steps {
                checkout scm
                sh "npm i"
            }
        }

        stage('Check changes: polaris logs repo') {            
            when {
                changeset "polaris/logs/**"
            }
            steps {
                echo "building polaris logs repo"
                sh "npm run build"
            }
        }

        stage('npm test') {
            steps {
                sh "npm t"
            }
        }
        stage("release polaris logs repo") {
            steps {
                echo "{$env.BRANCH_NAME}"
                if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME.contains('release') || env.BRANCH_NAME.contains('development')) {
                    echo "release branch: {$env.BRANCH_NAME}"
                    sh "npm run semantic-release"
                }
            }
        }

        stage("Clean directory") {
            steps {
                deleteDir()
            }
        }
    }
}
