#!/usr/bin/env bash

export COMMIT_HASH=${CIRCLE_SHA1}
if [ "$CIRCLE_BRANCH" = "master" ];
then
  export NODE_ENV=staging
  export WEB_ENV=staging
  export CLUSTER_PREFIX="dev";
elif [ "$CIRCLE_BRANCH" = "staging" ];
then
  export NODE_ENV=staging
  export WEB_ENV=staging
  export CLUSTER_PREFIX="dev";
elif [ "$CIRCLE_BRANCH" = "test" ];
then
  export NODE_ENV=test
  export WEB_ENV=test
  export CLUSTER_PREFIX="dev";
else
  export NODE_ENV=dev
  export WEB_ENV=dev
  export CLUSTER_PREFIX="dev";
fi


export IMAGE_NAME='402432300121.dkr.ecr.us-west-2.amazonaws.com/blockcluster-web'
export IMAGE_TAG="${NODE_ENV}-${COMMIT_HASH}"
