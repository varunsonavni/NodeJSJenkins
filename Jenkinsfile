// Install DockerPipeline Plugin
// usermod -aG docker jenkins
// restart jenkins url:8080/restart

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
                sh 'touch test.js'
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
                sh 'pwd'
                sh 'ls'
            }
        }
        
    }
}

// pipeline {
//     agent none
//     stages {
//         stage('Back-end') {
//             agent {
//                 docker { image 'maven:3.9.0-eclipse-temurin-11' }
//             }
//             steps {
//                 sh 'mvn --version'
//             }
//         }
//         stage('Front-end') {
//             agent {
//                 docker { image 'node:18.16.0-alpine' }
//             }
//             steps {
//                 sh 'node --version'
//             }
//         }
//     }
// }
