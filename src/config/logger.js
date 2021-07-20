import winston from 'winston';
import config from './config';

let logger;

if (process.env.NODE_ENV !== 'production') {
    logger = winston.createLogger({
        level: config.log.level,
        format: winston.format.simple(),
        transports: new winston.transports.Console()
    });
} else {
    logger = winston.createLogger({
        level: config.log.level,
        format: winston.format.simple(),
        transports: [
            new winston.transports.File({
                maxsize: 512000,
                maxFiles: 5,
                filename: `error.log`,
                level: 'error'
            })
        ],
    });
}

export default logger;
