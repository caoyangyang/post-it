## Description

Use [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## add jenkins file by plugin
```
npm install one-awesome-command -g
one-awesome-command add jenkins

```

## build docker image and run
```
docker build . -f docker/Dockerfile -t 'yangyangcao/post-it':latest --rm
docker run --name post-it -d -p 3000:3000 yangyangcao/post-it:latest

```


## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
