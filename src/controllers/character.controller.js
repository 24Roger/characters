import { Request, Response } from 'express';
import {
    findAll,
    findCharacterById,
    findByIdCharacterWithMovies,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    associateMovie,
} from '../services/character.service';
import Success from '../handlers/success.handler';
import { uploadCharacterImage } from '../services/image.service';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getCharacters = async (req, res, next) => {
    const { filter = '' } = req.query;

    try {
        const result = await findAll(filter);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getCharacterById = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await findCharacterById(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getByIdCharacterWithMovies = async (req, res, next) => {
    const id = req.params.id

    try {
        const result = await findByIdCharacterWithMovies(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const newCharacter = async (req, res, next) => {
    const character = req.body;

    try {
        const result = await createCharacter(character);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const modifyCharacter = async (req, res, next) => {
    const id = req.params.id;

    const character = req.body;

    try {
        const result = await updateCharacter(id, character);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const removeCharacter = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await deleteCharacter(id);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} req
 * @param {Response} res
 */

export const characterImage = async (req, res, next) => {
    const id = req.params.id;

    const image = req.file;

    try {
        const result = await uploadCharacterImage(id, image);

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
    const character = req.character;

    const movie = req.movie;

    try {
        const result = await associateMovie(character, movie);

        res.json(new Success(result));
    } catch (error) {
        next(error);
    }
}
