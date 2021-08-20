import express, { json } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import config from '../config/config';
import user from './user.routes';
import contentType from './contentType.routes';
import genreType from './genreType.routes';
import movie from './movie.routes';
import character from './character.routes';
import auth from './auth.routes';
import swaggerDocument from '../swagger/swagger.json';
import { notFound, errorHandler } from '../errors/error';

const app = express();

//middleware
app.use(json());
app.use(morgan('dev'));

app.use(config.api.prefix, user);
app.use(config.api.prefix, contentType);
app.use(config.api.prefix, genreType);
app.use(config.api.prefix, movie);
app.use(config.api.prefix, character);
app.use(config.api.prefix, auth);
app.use(
    config.swagger.path,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use(notFound);
app.use(errorHandler);

export default app;