import express, { json } from 'express';
import morgan from 'morgan';
import config from '../config/config';
import hello from './hello.routes';
import { notFound, errorHandler } from '../errors/error';

const app = express();

//middleware
app.use(json());
app.use(morgan('dev'));

app.use(config.api.prefix, hello);

app.use(notFound);
app.use(errorHandler);

export default app;