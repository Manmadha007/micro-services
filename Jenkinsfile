pipeline {
    agent any
    environment {
        // Use Jenkins credentials IDs
        GIT_CREDENTIALS_ID = 'github-credentials' // GitHub credentials
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials' // Docker Hub credentials
    }
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: '*/main']],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [],
                        userRemoteConfigs: [[
                            url: 'https://github.com/Manmadha007/micro-services.git',
                            credentialsId: GIT_CREDENTIALS_ID
                        ]]
                    ])
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("user-service")
                }
            }
        }
        stage('Push to Docker Registry') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        docker.image("user-service").push()
                    }
                }
            }
        }
    }
}
