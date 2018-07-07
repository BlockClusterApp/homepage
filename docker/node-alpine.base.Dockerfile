FROM node:8.11.2-alpine as builder

RUN apk add --no-cache --virtual .persistant-deps curl make gcc g++ python py-pip && npm install -g node-gyp
