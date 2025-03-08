pipeline {
    agent any
    environment {
        // Use Jenkins credentials IDs
        GIT_CREDENTIALS_ID = 'github-credentials' // GitHub credentials
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials' // Docker Hub credentials
        KUBECONFIG = '/home/ubuntu/kubeconfig' // Path to Kubernetes config
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
                    docker.build("manmadha4github/user-service", "userservice_dir/.")
                }
            }
        }
        stage('Push to Docker Registry') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        docker.image("manmadha4github/user-service").push()
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withEnv(["KUBECONFIG=${env.KUBECONFIG}"]) {
                        sh 'kubectl apply -f user-service-deployment.yaml'
                    }
                }
            }
        }
    }
}
