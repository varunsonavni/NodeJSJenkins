pipeline {
  
  agent any
  
  stages {
    
        stage('version check') {
          steps {
            sh "echo $BUILD_NUMBER"
          }
        }
        stage('image build') {
          steps {
            sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 970355526286.dkr.ecr.us-east-1.amazonaws.com"
            sh "docker build 970355526286.dkr.ecr.us-east-1.amazonaws.com/nodejs:$BUILD_NUMBER ."
            sh "docker push 970355526286.dkr.ecr.us-east-1.amazonaws.com/nodejs:$BUILD_NUMBER"
          }
        }
        stage('EKS Cluster Update') {
          steps {
            sh '''
            cat "deploy.yaml" | sed "s/{{TAG}}/$BUILD_NUMBER/g" | kubectl apply -f -
            '''
          }
        }
  }
}
    
