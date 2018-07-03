FROM circleci/python:3.6

WORKDIR /src

RUN sudo apt-get update
RUN sudo pip install awscli

# curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
COPY ./docker/kubectl /src

RUN sudo chmod +x ./kubectl

RUn sudo mv ./kubectl /usr/local/bin/kubectl

RUN mkdir ~/.kube
