#!/usr/bin/env bash

docker build \
  -f docker/Dockerfile
  -t $IMAGE_NAME:$IMAGE_TAG
  