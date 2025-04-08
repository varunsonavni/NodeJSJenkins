pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Perform build steps here
                sh 'echo "first step"'
                sh 'pwd'
                sh 'touch test.js'
                sh 'ls'
            }
        }
        
        stage('Test') {
            steps {
                // Perform testing steps here
                sh 'echo "second step"'
                sh 'pwd'
                sh 'ls'
            }
        }
        
    }
}


