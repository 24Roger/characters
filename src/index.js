import app from './routes/app';
import config from './config/config';
import logger from './config/logger';

const port = config.port;

app.listen(port, () => {
    logger.info('Server on port: ' + port);
});