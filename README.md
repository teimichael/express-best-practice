# Express Best Practice

Best current practice of TypeScript-based Express web framework.

# Quickstart

1. Install dependencies

```shell
yarn install
```

2. Duplicate `.env.example` as `.env` and configure environment variables

3. Build project to `dist`

```shell
npm run build
```

4. Run project

```shell
npm run start
```

# Development

## Create new models

Refer to `User.ts` to create new models in folder `src/models`

## Create new controllers

Refer to `UserController.ts` to create new controllers in folder `src/controllers`

## Run in dev

Run project in development server

```shell
npm run dev
```

## Run code analysis

```shell
npm run lint
```

---

# References

- [Express](https://expressjs.com/)
- [routing-controllers](https://github.com/typestack/routing-controllers)
- [TypeORM](https://typeorm.io/)
- [TypeDI](https://github.com/typestack/typedi)
