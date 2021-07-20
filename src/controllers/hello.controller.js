import { Request, Response } from 'express';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const hello = (req, res) => {
    res.send('hello');
}