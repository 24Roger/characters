import { check, body, param } from 'express-validator';
import multer from 'multer';
import { findGenreById } from '../../services/genreType.service';
import { findContentById } from '../../services/contentType.service';
import { findMovieById, findMovieByTitle } from '../../services/movie.service';
import { findCharacterById } from '../../services/character.service';
import AppError from '../../errors/appError';
import { ADMIN } from '../../config/constants';
import { validJwt, hasRole } from '../auth';
import { validResult, imageRequired } from '../commons';

const upload = multer();

const titleRequired = check('title', 'title is required').not().isEmpty();

const titleValid = body('title').trim().isLength({ min: 5, max: 50 }).withMessage('title field must be between 5 and 50 characters long');

const titleExist = body('title').trim().custom(
    async (title = '') => {
        const titleFound = await findMovieByTitle(title);

        if (titleFound) {
            throw new AppError('title already in use', 400);
        }
    }
);

const creationDateRequired = check('creationDate', 'creationDate is required').not().isEmpty();

const creationDateVaild = body('creationDate').trim().isDate('MM-DD-YYYY').withMessage('creationDate is invalid');

const calificationRequired = check('calification', 'calification is required').not().isEmpty();

const calificationValid = body('calification').trim().isFloat().withMessage('calification in invalid');

const genreTypeIdRequired = check('genreTypeId', 'genreTypeId is required').not().isEmpty();

const genreTypeIdValid = body('genreTypeId').trim().isInt().custom(
    async (id = '') => {
        const idGenreFound = await findGenreById(id);

        if (!idGenreFound) {
            throw new AppError('id genre not exist', 400);
        }
    }
);

const contentTypeIdRequired = check('contentTypeId', 'contentTypeId is required').not().isEmpty();

const contentTypeIdValid = body('contentTypeId').trim().isInt().custom(
    async (id = '') => {
        const idContentFound = await findContentById(id);

        if (!idContentFound) {
            throw new AppError('id content not exist', 400);
        }
    }
);

const idRequired = check('id', 'id is required').not().isEmpty();

const idValid = param('id').custom(
    async (id = '') => {
        const idMovieFound = await findMovieById(id);

        if (!idMovieFound) {
            throw new AppError('id movie not exist', 400)
        }
    }
)
const optionalTitleRequired = check('title', 'title is required').optional().not().isEmpty();

const optionalTitleValid = body('title').trim().isLength({ min: 5, max: 50 }).optional().withMessage('title field must be between 5 and 50 characters long');

const optionalTitleExist = body('title').optional().trim().custom(
    async (title = '') => {
        const titleFound = await findMovieByTitle(title);

        if (titleFound) {
            throw new AppError('title already in use', 400);
        }
    }
);

const optionalCreationDateRequired = check('creationDate', 'creationDate is required').optional().not().isEmpty();

const optionalCreationDateVaild = body('creationDate').optional().trim().isDate('MM-DD-YYYY').withMessage('creationDate is invalid');

const optionalCalificationRequired = check('calification', 'calification is required').optional().not().isEmpty();

const optionalCalificationValid = body('calification').optional().trim().isFloat().withMessage('calification in invalid');

const optionalGenreTypeIdRequired = check('genreTypeId', 'genreTypeId is required').optional().not().isEmpty();

const optionalGenreTypeIdValid = body('genreTypeId').optional().trim().isInt().custom(
    async (id = '') => {
        const idGenreFound = await findGenreById(id);

        if (!idGenreFound) {
            throw new AppError('id genre not exist', 400);
        }
    }
);

const optionalContentTypeIdRequired = check('contentTypeId', 'contentTypeId is required').optional().not().isEmpty();

const optionalContentTypeIdValid = body('contentTypeId').optional().trim().isInt().custom(
    async (id = '') => {
        const idContentFound = await findContentById(id);

        if (!idContentFound) {
            throw new AppError('id content not exist', 400);
        }
    }
);

const optionalImageEmpty = body('image').optional().isEmpty().withMessage('image field must be empty');

const idCharacterRequired = check('idCharacter', 'idCharacter is required').not().isEmpty();

const idMovieRequired = check('idMovie', 'idMovie is required').not().isEmpty();

const idCharacterExist = param('idCharacter').custom(
    async (idCharacter = '', { req }) => {
        const characterFound = await findCharacterById(idCharacter);

        if (!characterFound) {
            throw new AppError('id character not exist', 400);
        }

        req.character = characterFound;
    }
);

const idMovieExist = param('idMovie').custom(
    async (idMovie = '', { req }) => {
        const movieFound = await findMovieById(idMovie);

        if (!movieFound) {
            throw new AppError('id movie not exist', 400);
        }

        req.movie = movieFound;
    }
);

export const getValidator = [
    validJwt,
    validResult
];

export const getByIdValidator = [
    validJwt,
    idRequired,
    idValid,
    validResult
];

export const postValidator = [
    validJwt,
    hasRole(ADMIN),
    titleRequired,
    titleValid,
    titleExist,
    creationDateRequired,
    creationDateVaild,
    calificationRequired,
    calificationValid,
    genreTypeIdRequired,
    genreTypeIdValid,
    contentTypeIdRequired,
    contentTypeIdValid,
    optionalImageEmpty,
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
    optionalTitleRequired,
    optionalTitleValid,
    optionalTitleExist,
    optionalCreationDateRequired,
    optionalCreationDateVaild,
    optionalCalificationRequired,
    optionalCalificationValid,
    optionalGenreTypeIdRequired,
    optionalGenreTypeIdValid,
    optionalContentTypeIdRequired,
    optionalContentTypeIdValid,
    optionalImageEmpty,
    validResult
];

export const associationValidator = [
    validJwt,
    hasRole(ADMIN),
    idCharacterRequired,
    idMovieRequired,
    idCharacterExist,
    idMovieExist,
    validResult
];

export const deleteValidator = [
    validJwt,
    hasRole(ADMIN),
    idRequired,
    idValid,
    validResult
];