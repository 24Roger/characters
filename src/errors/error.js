import logger from '../config/logger';

export const notFound = (req, res, next) => {
    const error = new Error('Not found');

    error.status = 400;

    next(error);
}

export const errorHandler = (error, req, res, next) => {
    const status = error.status || 500;

    logger.error(`${status} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    logger.error(error.stack);

    res.status(status).json({
        error: {
            status,
            message: error.message,
            detail: error.data
        }
    });
}