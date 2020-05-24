# FITNESS APP

## How to install and run

Make sure **node** is properly installed and configured by running
```
node -v
```

Also check that **yarn** is installed with
```
yarn -v
```

If those things are OK and the repository properly cloned in your computer, run
```
yarn install
```

Before you start the project, install **expo** globally in your machine with
```
npm install -g expo
```

And after the installation is completed, start the development server by running
```
expo start
```

## Development tools and guidelines

This project uses **ESLint** and **Prettier** for code styling. It has a pre-commit hook checking
whether your code is uniform with the styles or not. You can easily develop using **VSCode** with
those plugins.

It is also configured with a pre-push commit that runs unit tests with **Jest**. Those actions are
also executed with **Github Actions** when you push your commits.
