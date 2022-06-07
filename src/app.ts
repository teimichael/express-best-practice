import 'reflect-metadata';

import {createExpressServer} from 'routing-controllers';
import {UserController} from './controllers/UserController';
import {Application} from "express";
import { useContainer as classValidatorUseContainer } from 'class-validator';
import { useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';
import {env} from "./env";

routingUseContainer(Container);
classValidatorUseContainer(Container, {
    fallback: true,
    fallbackOnErrors: true
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const app: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    controllers: [UserController], // we specify controllers we want to use
});

app.listen(env.app.port);
