import { Request, Response } from 'express';
import {
    findAll,
    findById,
    createMovie,
    updateMovie,
    deleteMovie,
} from '../services/movie.service';
import Success from '../handlers/success.handler';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getMovies = async (req, res, next) => {
    const { filter = '', options = '' } = req.query;

    try {
        const result = await findAll(filter, options);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getMovieById = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await findById(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const newMovie = async (req, res, next) => {
    const movie = req.body;

    try {
        const result = await createMovie(movie);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const modifyMovie = async (req, res, next) => {
    const id = req.params.id;

    const movie = req.body;

    try {
        const result = await updateMovie(id, movie);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const removeMovie = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await deleteMovie(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}