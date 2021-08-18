import { Request, Response } from 'express';
import {
    findAll,
    findMovieById,
    findByIdMovieWithCharacters,
    createMovie,
    updateMovie,
    deleteMovie,
    associateCharacter,
} from '../services/movie.service';
import Success from '../handlers/success.handler';
import { uploadMovieImage } from '../services/image.service';

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
        const result = await findMovieById(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getByIdMovieWithCharacters = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await findByIdMovieWithCharacters(id);

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

/**
 * @param {Request} req
 * @param {Response} res
 */

export const movieImage = async (req, res, next) => {
    const id = req.params.id;

    const image = req.file;

    try {
        const result = await uploadMovieImage(id, image);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const associate = async (req, res, next) => {
    const movie = req.movie;

    const character = req.character;

    try {
        const result = await associateCharacter(movie, character);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}