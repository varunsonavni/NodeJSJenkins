pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs('NODEJS') {
                    sh 'node -v'
                    sh 'npm'
                }
            }
        }
    }
}
