FROM node:8.10.0-alpine

ENV NODE_ENV=production

# Set a working directory
WORKDIR /usr/src/app

# Install Node.js dependencies
COPY package.json yarn.lock ./
RUN yarn install --production --no-progress

# Attempts to copy "build" folder even if it doesn't exist
COPY build* ./

# Run the container under "node" user by default
USER node

CMD [ "node", "server.js"]
