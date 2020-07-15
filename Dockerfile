FROM node:slim AS INSTALLER

WORKDIR /usr/src/app

COPY package.json .

RUN [ "npm", "install" ]

COPY . .

FROM node:slim AS AUDIT

WORKDIR /usr/src/app

COPY --from=INSTALLER /usr/src/app/src/ .
COPY package.json .

RUN [ "npm", "audit", "fix" ]

FROM node:slim AS LINTER

WORKDIR /usr/src/app

COPY --from=INSTALLER /usr/src/app/src/ .
COPY --from=INSTALLER /usr/src/app/node_modules/ .
COPY --from=INSTALLER /usr/src/app/package.json .
COPY --from=INSTALLER /usr/src/app/.eslintrc.js .

RUN [ "npm", "run", "lint" ]

FROM node:slim AS RUNNER

WORKDIR /usr/src/app

COPY --from=INSTALLER /usr/src/app/package.json .

RUN [ "npm", "install", "--global", "expo-cli", "--force" ]

ENTRYPOINT [ "expo", "start", "--host", "localhost:80" ]
