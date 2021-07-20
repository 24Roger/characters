import app from './routes/app';
import config from './config/config';

const port = config.port;

app.listen(port, () => {
    console.log('Server on port: ' + port);
});