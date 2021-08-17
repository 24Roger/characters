import { Request, Response } from 'express';
import { login, register } from '../services/auth.service';
import Success from '../handlers/success.handler';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const result = await login(email, password);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const registerUser = async (req, res, next) => {
    const { userName, email, password } = req.body;

    try {
        const result = await register(userName, email, password);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}