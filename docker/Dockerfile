FROM blockcluster/node-alpine-base as builder

# Set a working directory
WORKDIR /src/

COPY package.json yarn.lock jest.config.js chunk-manifest.json .stylelintrc.js .prettierrc.js .flowconfig .eslintrc.js /src/
RUN yarn
COPY ./ /src/
RUN yarn build --release
RUN mv node_modules dev_node_modules
RUN yarn --production

FROM node:8.11.2-alpine as base

WORKDIR /src/
COPY --from=builder /src/build* /src/
COPY --from=builder /src/node_modules /src/node_modules

# Run the container under "node" user by default
USER node
EXPOSE 3000
CMD [ "node", "server.js"]
