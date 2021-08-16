import { check, body, param } from 'express-validator';
import { findByContent, findContentById } from '../../services/contentType.service';
import AppError from '../../errors/appError';
import { ADMIN } from '../../config/constants';
import { validJwt, hasRole } from '../auth';
import { validResult } from '../commons';

const contentRequired = check('content', 'content is required').not().isEmpty();

const contentValid = body('content').trim().isLength({ min: 2, max: 10 }).withMessage('content field must be between 2 and 10 characters long');

const contentExist = check('content').trim().custom(
    async (content = '') => {
        const contentFound = await findByContent(content);

        if (contentFound) {
            throw new AppError('content already in use', 400);
        }
    }
);

const idRequired = check('id', 'id is required').not().isEmpty();

const idValid = param('id',).trim().custom(
    async (id) => {
        const idFound = await findContentById(id);

        if (!idFound) {
            throw new AppError('id not exist', 400);
        }
    }
);

export const getValidator = [
    validJwt,
    validResult
];

export const postValidator = [
    validJwt,
    hasRole(ADMIN),
    contentRequired,
    contentValid,
    contentExist,
    validResult
];

export const putValidator = [
    validJwt,
    hasRole(ADMIN),
    idRequired,
    idValid,
    contentRequired,
    contentValid,
    contentExist,
    validResult
];

export const deleteValidator = [
    validJwt,
    hasRole(ADMIN),
    idRequired,
    idValid,
    validResult
];