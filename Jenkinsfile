pipeline {
    agent any

    stages {
        stage('Install Node.js') {
            steps {
                nodejs('NODEJS')  // Use the configured NodeJS installation
            }
        }

        stage('Build') {
            steps {
                sh 'node -v'
                sh 'npm'
            }
        }
    }
}
