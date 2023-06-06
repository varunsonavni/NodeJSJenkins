pipeline {
    agent none

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:16'
                }
            }
            steps {
                // Perform build steps here
                sh 'echo "first step"'
                sh 'node -v'
                sh 'pwd'
                sh 'ls'
            }
        }
        
        stage('Test') {
            agent {
                docker {
                    image 'python:latest'
                }
            }
            steps {
                // Perform testing steps here
                sh 'echo "second step"'
                sh 'python -v'
                sh 'pwd'
                sh 'ls'
            }
        }
        
    }
}
