def buildJar() {
    echo "building the application..."
    sh 'pwd'
} 

def buildImage() {
    echo "building the docker image..."
    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
        sh 'docker build -t djangoreactdev/portfolio:1.0 .'
        sh "echo $PASS | docker login -u $USER --password-stdin"
        sh 'docker push djangoreactdev/portfolio:1.0'
    }
} 

def deployApp() {
    echo 'deploying the application...'
} 

return this
