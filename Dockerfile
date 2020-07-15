FROM node:slim AS BUILDER

WORKDIR /usr/src/app

COPY package.json .

RUN [ "npm", "install" ]

COPY . .

FROM node:slim AS LINTER

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/build .

RUN [ "npm", "run" ]

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/build .

FROM node:slim AS RUNNER

ENTRYPOINT [ "expo", "start" ]
