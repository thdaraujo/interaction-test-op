############################
# Build container
############################
FROM node:12-alpine AS dep

WORKDIR /ops

ADD package.json .
RUN npm install

ADD . .

############################
# Final container
############################
FROM registry.cto.ai/official_images/node:latest

WORKDIR /ops

COPY --from=dep /ops .
