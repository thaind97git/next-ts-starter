# syntax=docker/dockerfile:1
FROM node:v16.17.1-a

WORKDIR /app

COPY .next .next
COPY node_modules node_modules
COPY package.json package.json
COPY public public

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

ENTRYPOINT [ "pnpm", "start" ]

