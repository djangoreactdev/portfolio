def buildJar() {
    echo "building the application..."
    sh 'pwd'
} 

def buildImage() {
    echo "building the docker image..."
    withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
        sh 'docker build -t djangoreactdev/portfolio:1.0 ./front-next'
        sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
        sh 'docker push djangoreactdev/portfolio:1.0'
    }
} 

def deployApp() {
    echo 'deploying the application...'
} 

return this
