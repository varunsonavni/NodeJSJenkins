pipeline {
  agent any
  stages {
    stage('test') {
      parallel {
        stage('test') {
          steps {
            echo 'testing'
            sh 'echo "testing"'
          }
        }

        stage('version check') {
          steps {
            sh '''git --version
                  '''
          }
        }

      }
    }

    stage('copy to ec2') {
      when { branch 'main'}
      steps {
        
        sh '''pwd
              rsync -zhvr . ubuntu@3.84.86.136:/home/ubuntu/main/
              '''
      }
    }

    stage('Install Packaged') {
      when { branch 'main'}
      steps {
        sh 'ssh ubuntu@3.84.86.136 \'cd /home/ubuntu/main && npm i\''
      }
    }

    stage('Start Application') {
      when { branch 'main'}
      steps {
        sh 'ssh ubuntu@3.84.86.136 \"cd /home/ubuntu/main/ && pm2 restart\"'
      }
    }

    
    
    
      stage('copy to ec2 - stage') {
        when { branch 'stage'}
        steps {
        sh '''pwd
              rsync -zhvr . ubuntu@44.202.54.38:/home/ubuntu/stage/
              '''
      }
    }

    stage('Install Packaged - stage') {
      when { branch 'stage'}
      steps {
        sh 'ssh ubuntu@44.202.54.38 \"cd /home/ubuntu/stage && npm i\"'
      }
    }

    stage('Start Application - stage') {
      when { branch 'stage'}
      steps {
        sh 'ssh ubuntu@44.202.54.38 \"cd /home/ubuntu/stage/ && pm2 restart\"'
      }
    }

    
    
    
    
  
  }
}
