import { check, body, param } from 'express-validator';
import multer from 'multer';
import AppError from '../../errors/appError';
import { ADMIN } from '../../config/constants';
import { validJwt, hasRole } from '../auth';
import { findCharacterById } from '../../services/character.service';
import { validResult, imageRequired } from '../commons';

const upload = multer();

const nameRequired = check('name', 'name is required').not().isEmpty();

const nameValid = body('name').trim().isLength({ min: 2, max: 50 }).withMessage('name field must be between 8 and 32 characters long');

const ageValid = body('age').trim().isInt().withMessage('age is invalid');

const historyRequired = check('history', 'history is required').not().isEmpty();

const historyValid = body('history').trim().isString().isLength({ min: 10, max: 1000 }).withMessage('field must be between 10 and 1000 characters long');

const idRequired = check('id', 'id is required').not().isEmpty();

const idValid = param('id').custom(
    async (id = '') => {
        const idFound = await findCharacterById(id);

        if (!idFound) {
            throw new AppError('id character not exist');
        }
    }
);

const optionalNameRequired = check('name', 'name is required').optional().not().isEmpty();

const optionalNameValid = body('name').optional().trim().isLength({ min: 2, max: 50 }).withMessage('name field must be between 8 and 32 characters long');

const optionalImageEmpty = body('image').optional().isEmpty().withMessage('image field must be empty');

const optionalAgeValid = body('age').optional().trim().isInt().withMessage('age is invalid');

const optionalHistoryRequired = check('history', 'history is required').optional().not().isEmpty();

const optionalHistoryValid = body('history').optional().trim().isString().isLength({ min: 10, max: 1000 }).withMessage('history field must be between 10 and 1000 characters long');

export const getValidator = [
    validJwt,
    validResult
];

export const postValidator = [
    validJwt,
    hasRole(ADMIN),
    nameRequired,
    nameValid,
    optionalImageEmpty,
    ageValid,
    historyRequired,
    historyValid,
    validResult
];

export const postImageValidator = [
    validJwt,
    hasRole(ADMIN),
    idRequired,
    idValid,
    upload.single('image'),
    imageRequired,
    validResult
];

export const putValidator = [
    validJwt,
    hasRole(ADMIN),
    idRequired,
    idValid,
    optionalNameRequired,
    optionalNameValid,
    optionalImageEmpty,
    optionalAgeValid,
    optionalHistoryRequired,
    optionalHistoryValid,
    validResult
];

export const deleteValidator = [
    validJwt,
    hasRole(ADMIN),
    idRequired,
    idValid,
    validResult
];