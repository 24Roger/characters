import { check, body, param } from 'express-validator';
import AppError from '../../errors/appError';
import { findById } from '../../services/character.service';
import { validResult } from '../commons';

const nameRequired = check('name', 'name is required').not().isEmpty();

const nameValid = body('name').trim().isLength({ min: 2, max: 50 }).withMessage('name field must be between 8 and 32 characters long');

const imageValid = body('image').trim().isURL().withMessage('url is invalid');

const ageValid = body('age').trim().isInt().withMessage('age is invalid');

const historyRequired = check('history', 'history is required').not().isEmpty();

const historyValid = body('history').trim().isString().isLength({ min: 10, max: 1000 }).withMessage('field must be between 10 and 1000 characters long');

const idRequired = check('id', 'id is required').not().isEmpty();

const idValid = param('id').custom(
    async (id = '') => {
        const idFound = await findById(id);

        if (!idFound) {
            throw new AppError('id character not exist');
        }
    }
);

const optionalNameRequired = check('name', 'name is required').optional().not().isEmpty();

const optionalNameValid = body('name').optional().trim().isLength({ min: 2, max: 50 }).withMessage('name field must be between 8 and 32 characters long');

const optionalImageValid = body('image').optional().trim().isURL().withMessage('url is invalid');

const optionalAgeValid = body('age').optional().trim().isInt().withMessage('age is invalid');

const optionalHistoryRequired = check('history', 'history is required').optional().not().isEmpty();

const optionalHistoryValid = body('history').optional().trim().isString().isLength({ min: 10, max: 1000 }).withMessage('history field must be between 10 and 1000 characters long');

export const postValidator = [
    nameRequired,
    nameValid,
    //imageValid,
    ageValid,
    historyRequired,
    historyValid,
    validResult
];

export const putValidator = [
    idRequired,
    idValid,
    optionalNameRequired,
    optionalNameValid,
    optionalImageValid,
    optionalAgeValid,
    optionalHistoryRequired,
    optionalHistoryValid,
    validResult
];

export const deleteValidator = [
    idRequired,
    idValid,
    validResult
];