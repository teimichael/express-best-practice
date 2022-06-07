import 'reflect-metadata';

import {createExpressServer, useContainer as routingUseContainer} from 'routing-controllers';
import {Application} from "express";
import {useContainer as classValidatorUseContainer} from 'class-validator';
import {Container} from 'typedi';
import {env} from "./env";
import path from "path";

// Set typedi container for routing-controllers and class-validator
routingUseContainer(Container);
classValidatorUseContainer(Container, {
    fallback: true,
    fallbackOnErrors: true
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const app: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    controllers: [path.join(__dirname + '/controllers/*.js')],
});

app.listen(env.app.port);
