def buildJar() {
    echo "building the application..."
    sh 'pwd'
} 

def buildImage() {
    echo "building the docker image..."
    sh 'docker build -t djangoreactdev/portfolio-sanity:1.3 ./sanity'
    sh 'docker build -t djangoreactdev/portfolio:1.3 ./front-next'

    withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {

        sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
        sh 'docker push djangoreactdev/portfolio:1.3'
        sh 'docker push djangoreactdev/portfolio-sanity:1.3'
    }
} 

// def deployApp() {
//     echo 'deploying the application...'
//     sh 'docker pull djangoreactdev/portfolio:1.0'
//     sh 'docker stop portfolio || true'
//     sh 'docker rm portfolio || true'
//     sh 'docker rmi portfolio || true'
//     sh 'docker pull djangoreactdev/portfolio:1.0'
//     sh 'docker run -d --name portfolio -p 80:3000 djangoreactdev/portfolio:1.0'
// } 

return this
