import { check, body } from 'express-validator';
import { findUserName, findEmail } from '../../services/user.service';
import AppError from '../../errors/appError';
import { validToken, validRole } from '../../services/auth.service';
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

export const loginValidator = [
    emailRequired,
    emailValid,
    passwordRequired,
    validResult
];

export const registerValidator = [
    userNameRequired,
    userNameValid,
    userNameExist,
    emailRequired,
    emailValid,
    emailExist,
    passwordRequired,
    passwordValid,
    validResult
]

export const validJwt = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        const user = await validToken(token);

        req.user = user;

        next();
    } catch (error) {
        next(error);
    }
}

export const hasRole = (...roles) => {
    return (req, res, next) => {
        try {
            validRole(req.user, ...roles);

            next();
        } catch (error) {
            next(error);
        }
    }
}