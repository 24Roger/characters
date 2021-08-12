import { Request, Response } from 'express';
import {
    findAll,
    createContentType,
    updateContentType,
    deleteContentType,
} from '../services/contentType.service';
import Success from '../handlers/success.handler';

/**
 *@param {Request} req
 *@param {Response} res
 */

export const getContentTypes = async (req, res, next) => {
    try {
        const result = await findAll();

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const newContentType = async (req, res, next) => {
    const content = req.body;

    try {
        const result = await createContentType(content);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

export const modifyContentType = async (req, res, next) => {
    const id = req.params.id;

    const content = req.body;

    try {
        const result = await updateContentType(id, content);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

export const removeContentType = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await deleteContentType(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}