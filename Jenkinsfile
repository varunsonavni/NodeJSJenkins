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
        sh 'ssh -t ubuntu@3.84.86.136 \'cd /home/ubuntu/main && npm i\''
      }
    }

    stage('Start Application') {
      when { branch 'main'}
      steps {
        sh 'ssh -t ubuntu@3.84.86.136 "cd /home/ubuntu/main/"'
      }
    }

    
    
    
      stage('copy to ec2') {
        when { branch 'stage'}
        steps {
        sh '''pwd
              rsync -zhvr . ubuntu@3.84.86.136:/home/ubuntu/stage/
              '''
      }
    }

    stage('Install Packaged') {
      when { branch 'stage'}
      steps {
        sh 'ssh -t ubuntu@3.84.86.136 \'cd /home/ubuntu/stage && npm i\''
      }
    }

    stage('Start Application') {
      when { branch 'stage'}
      steps {
        sh 'ssh -t ubuntu@3.84.86.136 "cd /home/ubuntu/stage/"'
      }
    }

    
    
    
    
    
      stage('copy to ec2') {
      when { branch 'dev'}
      steps {
        sh '''pwd
              rsync -zhvr . ubuntu@3.84.86.136:/home/ubuntu/dev/
              '''
      }
    }

    stage('Install Packaged') {
      when { branch 'dev'}
      steps {
        sh 'ssh -t ubuntu@3.84.86.136 \'cd /home/ubuntu/dev && npm i\''
      }
    }

    stage('Start Application') {
      when { branch 'dev'}
      steps {
        sh 'ssh -t ubuntu@3.84.86.136 "cd /home/ubuntu/dev/"'
      }
    }

  }
}
