pipeline {
  
  agent any
  
  stages {
    
        stage('version check') {
          steps {
            sh "echo $GIT_COMMIT"
          }
        }
        stage('image build') {
          steps {
            sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 970355526286.dkr.ecr.us-east-1.amazonaws.com"
            sh "docker build -t 970355526286.dkr.ecr.us-east-1.amazonaws.com/nodejs:$GIT_COMMIT ."
            sh "docker push 970355526286.dkr.ecr.us-east-1.amazonaws.com/nodejs:$GIT_COMMIT"
          }
        }
        stage('EKS Cluster Update') {
          steps {
            sh '''
            cat "deploy.yaml" | sed "s/{{TAG}}/$GIT_COMMIT/g" | kubectl apply -f -
            '''
          }
        }
  }
}
    
