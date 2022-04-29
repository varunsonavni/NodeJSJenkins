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
      steps {
        sh '''pwd
              rsync -zhvr . ubuntu@3.84.86.136:/home/ubuntu/varun/
              '''
      }
    }

    stage('Install Packaged') {
      steps {
        sh 'ssh -t ubuntu@3.84.86.136 \'cd /home/ubuntu/varun && npm i\''
      }
    }

    stage('Start Application') {
      steps {
        sh 'ssh -t ubuntu@3.84.86.136 "cd /home/ubuntu/varun/"'
      }
    }

  }
}
