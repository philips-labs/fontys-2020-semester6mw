# CoffeeTalk
A group project where Fontys ICT & Software Engineering collaborate with Philips.

The goal of this project is is to connect colleagues in these COVID-19 times. We tried to connect these colleagues  based only on professional interrests.

This project is also meant to learn about Microservices, Docker, Kubernetes and Pipelines.

# Running the project
There is 3 ways this project can run.

- Docker-compose (Local)
- Kubernetes cluster (Local)
- Kubernetes cluster (Azure)

# Docker-compose
To run locally via docker-compose open a command line tool and direct yourself to:
` ./src/docker `

When there you can run:
` docker-compose up -d `

`-d` for detached mode, so there is no extra logging in your command line tool. For logging you can check the containers themselves or via Docker Desktop.

# Kubernetes (Local)

# Kubernetes (Azure)
This project also runs on Azure at this current moment.

## Step 1 
Getting MongoDB up and running that can be done by doing the following:
```
$ helm install mongodb \
    --set auth.rootPassword=password123,initdbScriptsConfigMap=init-mongodb-configmap \
    bitnami/mongodb
```
Sources used:
- https://github.com/bitnami/bitnami-docker-mongodb/issues/217
- https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters
- https://hackernoon.com/kubernetes-installing-mongodb-replicaset-on-azure-using-helm-20f6bfcf92b3

