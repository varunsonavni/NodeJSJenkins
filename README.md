touch ~/.bashrc 

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  

[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  

nvm install node

node -v

npm -v

echo "hello"





ADD Plugin Nodejs, go to tools edit Node give name as NODEJS and 
edit the pipeline to use that tool. Click on install automatically.


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
