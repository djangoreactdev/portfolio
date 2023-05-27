#!/usr/bin/env groovy

def gv

pipeline {
    agent {
        label 'developer'
    }

    environment {
        NEXT_PUBLIC_SANITY_DATASET = "production"
        NEXT_PUBLIC_SANITY_PROJECT_ID = "i0j3k9o4"
        NODE_ENV = "production"
        NEXT_PUBLIC_BASE_URL = "http://localhost:3000"
    }

    stages {
        stage("init") {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage("build") {
            steps {
                script {
                    gv.buildJar()
                }
            }
        }
        stage("build image") {
            steps {
                script {
                    gv.buildImage()
                }
            }
        }
        // stage("deploy") {
        //     agent {
        //         label 'production'
        //     }
        //     steps {
        //         script {
        //             gv.deployApp()
        //         }
        //     }
        // }
    }
}
