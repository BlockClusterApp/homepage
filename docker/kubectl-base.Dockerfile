FROM circleci/python:3.6

WORKDIR /src

RUN sudo apt-get update
RUN sudo pip install awscli

# curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
COPY ./kubectl /src

RUN sudo chmod +x ./kubectl

RUN sudo mv ./kubectl /usr/local/bin/kubectl

# curl -LO https://storage.googleapis.com/kubernetes-helm/helm-v2.9.1-linux-amd64.tar.gz
COPY ./linux-amd64/helm /usr/local/bin/helm

RUN mkdir ~/.kube

RUN helm init --client-only 


