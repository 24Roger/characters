import { Request, Response } from 'express';
import {
    findAll,
    findById,
    createCharacter,
    updateCharacter,
    deleteCharacter
} from '../services/character.service';
import Success from '../handlers/success.handler';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getCharacters = async (req, res, next) => {
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

export const getCharacterById = async (req, res, next) => {
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
