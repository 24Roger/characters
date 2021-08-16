import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findEmail, findById, createUser } from './user.service';
import AppError from '../errors/appError';
import config from '../config/config';

export const login = async (email, password) => {
    try {
        const user = await findEmail(email);

        console.log(user);


        if (!user) {
            throw new AppError('authentication failed, email / password does not correct', 401);
        }

        if (!user.enable) {
            throw new AppError('authentication failed, user is disabled', 401);
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            throw new AppError('authentication failed email / password does not correct', 401);
        }

        const token = jwt.sign(
            {
                id: user.id,
            },
            config.auth.secret,
            {
                expiresIn: config.auth.ttl
            }
        );

        return { token };
    } catch (error) {
        throw error;
    }
}

export const validToken = async (token) => {
    try {
        if (!token) {
            throw new AppError('authentication failed, token is required', 401);
        }

        let id;

        try {
            const obj = jwt.verify(token, config.auth.secret);

            id = obj.id
        } catch (error) {
            throw new AppError('authentication failed, invalid token', 401, token);
        }

        const user = await findById(id);

        if (!user) {
            throw new AppError('authentication failed, invalid token', 401);
        }

        if (!user.enable) {
            throw new AppError('authentication failed, rejected user ', 401);
        }

        return user;
    } catch (error) {
        throw error;
    }
}

export const validRole = (user, ...roles) => {
    if (!roles.includes(user.role)) {
        throw new AppError('authorization failed, user without privileges', 403);
    }

    return true;
}


export const register = async (userName, email, password) => {

    const user = { userName, email, password };

    await createUser(user);

    return 'register successfully';
}
