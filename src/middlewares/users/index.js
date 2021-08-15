import { check, body, param } from 'express-validator';
import { findUserName, findEmail, findById } from '../../services/user.service';
import AppError from '../../errors/appError';
import { validResult } from '../commons';

const userNameRequired = check('userName', 'userName is required').not().isEmpty();

const userNameValid = body('userName').isLength({ min: 5, max: 7 }).trim().withMessage('userName field must be between 5 and 7 characters long').toUpperCase();

const userNameExist = check('userName').custom(
    async (userName = '') => {
        const userNameFound = await findUserName(userName);

        if (userNameFound) {
            throw new AppError('userName already in use', 400);
        }
    }
);

const nameRequired = check('name', 'name is required').not().isEmpty();

const nameValid = body('name').isLength({ min: 5, max: 25 }).trim().withMessage('name field must be between 5 and 25 characters long');

const emailRequired = check('email', 'email is required').not().isEmpty();

const emailValid = body('email').trim().isEmail().withMessage('email is invalid').normalizeEmail().toLowerCase();

const emailExist = check('email').custom(
    async (email = '') => {
        const emailFound = await findEmail(email);

        if (emailFound) {
            throw new AppError('email already in use', 400);
        }
    }
);

const passwordRequired = check('password', 'password is required').not().isEmpty();

const passwordValid = body('password').trim().isLength({ min: 8, max: 32 }).withMessage('password field must be between 8 and 32 characters long').isStrongPassword().withMessage('password is weak');

const idRequired = check('id', 'id is required').not().isEmpty();

const idExist = param('id').custom(
    async (id = '') => {
        const idFound = await findById(id);

        if (!idFound) {
            throw new AppError('id not exist', 400);
        }
    }
)

const optionalUserNameRequired = check('userName', 'userName is required').optional().not().isEmpty();

const optionalUserNameValid = body('userName').optional().isLength({ min: 5, max: 7 }).trim().withMessage('userName field must be between 5 and 7 characters long').toUpperCase()

const optionalUserNameExist = check('userName').optional().custom(
    async (userName = '') => {
        const userNameFound = await findUserName(userName);

        if (userNameFound) {
            throw new AppError('userName already in use', 400);
        }
    }
);

const optionalNameRequired = check('name', 'name is required').optional().not().isEmpty();

const optionalEmailRequired = check('email', 'email is required').optional().not().isEmpty();

const optionalEmailValid = body('email').optional().trim().isEmail().withMessage('email is invalid').normalizeEmail().toLowerCase();

const optionalEmailExist = check('email').optional().custom(
    async (email = '') => {
        const emailFound = await findEmail(email);

        if (emailFound) {
            throw new AppError('email already in use', 400);
        }
    }
);

const optionalPasswordRequired = check('password', 'password is required').optional().not().isEmpty();

const optionalPasswordValid = body('password').optional().trim().isLength({ min: 8, max: 32 }).withMessage('password field must be between 8 and 32 characters long').isStrongPassword().withMessage('password is weak');

const optionalRoleRequired = check('role', 'role is required').optional().not().isEmpty();

export const postValidator = [
    userNameRequired,
    userNameValid,
    userNameExist,
    nameRequired,
    nameValid,
    emailRequired,
    emailValid,
    emailExist,
    passwordRequired,
    passwordValid,
    validResult
];

export const putValidator = [
    idRequired,
    idExist,
    optionalUserNameRequired,
    optionalUserNameValid,
    optionalUserNameExist,
    optionalNameRequired,
    optionalEmailRequired,
    optionalEmailValid,
    optionalEmailExist,
    optionalPasswordRequired,
    optionalPasswordValid,
    optionalRoleRequired,
    validResult
];

export const deleteValidator = [
    idRequired,
    idExist,
    validResult
]