import { Request, Response } from 'express';
import {
    findAll,
    createGenreType,
    updateGenreType,
    deleteGenreType,
} from '../services/genreType.service';
import Success from '../handlers/success.handler';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getGenreTypes = async (req, res, next) => {
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

export const newGenreType = async (req, res, next) => {
    const genre = req.body;

    try {
        const result = await createGenreType(genre);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const modifyGenreType = async (req, res, next) => {
    const id = req.params.id;

    const genre = req.body;

    try {
        const result = await updateGenreType(id, genre);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const removeGenreType = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await deleteGenreType(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}
