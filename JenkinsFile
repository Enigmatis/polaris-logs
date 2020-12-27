#!groovy

properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '7', numToKeepStr: ''))])

pipeline {
    agent any
    stages {
        stage("npm install") {
            checkout scm
            sh "npm i"
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
            sh "npm t"
        }

        stage("release polaris logs repo") {
            sh "npx semantic release"
        }

        stage("Clean directory") {
            steps {
                deleteDir()
            }
        }
    }
}
