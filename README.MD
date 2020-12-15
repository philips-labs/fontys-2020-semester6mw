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

## MongoDB
The first step is to get MongoDB up and running, for that we have to apply the config map to the cluster, for the setup that is required once mongo is on the cluster. You can apply the config map by doing this:
```
kubectl apply -f init-mongo-configmap.yml
```
This configmap contains all the extra setup required for mongo to get initialized.

After that we can use helm to install a mongodb chart for us on the kubernetes cluster. If you want to know more about installing helm charts on a kubernetes cluster, check out [helm](https://helm.sh/docs/intro/quickstart/).
```
$ helm install mongodb \
    --set auth.rootPassword=password123,initdbScriptsConfigMap=init-mongodb-configmap \
    bitnami/mongodb
```
To uninstall the chart do:
```
helm delete mongodb
```

For cheese:
```
$ helm install mongodb \
    --set auth.enabled=false,initdbScriptsConfigMap=init-mongodb-configmap \
    bitnami/mongodb
```

Sources used:
- https://github.com/bitnami/bitnami-docker-mongodb/issues/217
- https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters
- https://hackernoon.com/kubernetes-installing-mongodb-replicaset-on-azure-using-helm-20f6bfcf92b3

## Profile Service
Than to get the profile service up and running we use Azure pipelines to push the images to a Azure Container Registry (acr). But we also use a configmap for the setup that has to be done, for connecting to MongoDB.

To get the configmap up, do:
```
kubectl apply -f coffeetalk-profile-configmap.yml
```

We also use a deployment and a service for the profile microservice. But these are also automated with Azure Pipelines.