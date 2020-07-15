# FITNESS APP

## How to install and run

Make sure **node** is properly installed and configured by running

```shell
node -v
```

Also check that **yarn** is installed with

```shell
yarn -v
```

If those things are OK and the repository properly cloned in your computer, run

```shell
yarn install
```

Before you start the project, install **expo** globally in your machine with

```shell
npm install -g expo
```

And after the installation is completed, start the development server by running

```shell
expo start
```

## Development tools and guidelines

This project uses **ESLint** and **Prettier** for code styling. It has a pre-commit hook checking
whether your code is uniform with the styles or not. You can easily develop using **VSCode** with
those plugins.

It is also configured with a pre-push commit that runs unit tests with **Jest**. Those actions are
also executed with **Github Actions** when you push your commits.

## Docker support

This project also supports Docker images published in [Docker Hub](https://hub.docker.com/r/fazenda/fitness-app) in the following architectures:

- amd64
- arm/v7
- arm64/v8
- ppc64le
- s390x

To build it, just use the [build.sh](./build.sh) script -- with the multiarch support enabled.

To run locally with all the services enabled, just run:

```shell
docker-compose up
```

To run with new changes -- overriding the cache --, just run:

```shell
docker-compose up --build
```

## TODO

- Multistage build

## Authors

- [santiagogustavo](https://github.com/santiagogustavo)
- [Fazendaaa](https://github.com/Fazendaaa)

## License

See file [LICENSE](./LICENSE)
