import { check, body, param } from 'express-validator';
import { findByGenre, findGenreById } from '../../services/genreType.service';
import AppError from '../../errors/appError';
import { ADMIN } from '../../config/constants';
import { validJwt, hasRole } from '../auth';
import { validResult } from '../commons';

const genreRequired = check('genre', 'genre is required').not().isEmpty();

const genreValid = body('genre').trim().isLength({ min: 2, max: 10 }).withMessage('genre field must be between 8 and 32 characters long');

const genreExist = check('genre').trim().custom(
    async (genre = '') => {
        const genreFound = await findByGenre(genre);

        if (genreFound) {
            throw new AppError('genre already in use', 400);
        }
    }
);

const idRequired = check('id', 'id is required').not().isEmpty();

const idValid = param('id').trim().custom(
    async (id) => {
        const idFound = await findGenreById(id);

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
    genreRequired,
    genreValid,
    genreExist,
    validResult
];

export const putValidator = [
    validJwt,
    hasRole(ADMIN),
    idRequired,
    idValid,
    genreRequired,
    genreValid,
    genreExist,
    validResult
];

export const deleteValidator = [
    validJwt,
    hasRole(ADMIN),
    idRequired,
    idValid,
    validResult
]