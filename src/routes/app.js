import express, { json } from 'express';
import morgan from 'morgan';
import config from '../config/config';
import hello from './hello.routes';

const app = express();

//middleware
app.use(json());
app.use(morgan('dev'));

app.use(config.api.prefix, hello);

export default app;