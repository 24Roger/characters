import { validationResult, checkSchema } from 'express-validator';
import AppError from '../errors/appError';

export const validResult = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new AppError('validation errors', 400, errors.errors);
    }

    next();
}

export const imageRequired = checkSchema(
    {
        'image': {
            custom: {
                options: (value, { req }) => !!req.file,
                errorMessage: 'You should upload a image',
            },
        }
    }
);