import { Request, Response } from 'express';
import {
    findAll,
    createUser,
    updateUser,
    deleteUser,
} from '../services/user.service';
import Success from '../handlers/success.handler';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await findAll();

        res.json(new Success(users));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const newUser = async (req, res, next) => {
    const user = req.body;

    try {
        const result = await createUser(user);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const modifyUser = async (req, res, next) => {
    const id = req.params.id;

    const user = req.body;

    try {
         const result = await updateUser(id, user);

         res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const removeUser = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await deleteUser(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}