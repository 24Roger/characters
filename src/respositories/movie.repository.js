import { Op } from 'sequelize';
import Movie from "../models/Movie";

class MovieRepository {
    constructor() { }

    async findAll({ title, calification, creationDate }, options) {
        const { order } = options;

        let where = {};

        if (title) {
            where.title = {
                [Op.like]: `%${title}%`
            }
        }

        if (calification) {
            where.calification = {
                [Op.eq]: calification
            }
        }

        if (creationDate) {
            where.creationDate = {
                [Op.eq]: creationDate
            }
        }

        let config = {
            where,
            attributes: [
                'id',
                'title',
                'image',
                'creationDate',
                'calification',
                'genreTypeId',
                'contentTypeId',
            ]
        }

        if (order) {
            config.order = [order.split(';')];
        }

        return await Movie.findAll(config);
    }

    async findMovieById(id) {
        return await Movie.findByPk(
            id,
            {
                attributes: [
                    'title',
                    'image',
                    'creationDate',
                    'calification',
                    'genreTypeId',
                    'contentTypeId',
                ]
            }
        );
    }

    async createMovie(movie) {
        return await Movie.create(movie);
    }

    async updateMovie(id, movie) {
        return await Movie.update(
            movie,
            {
                where: {
                    id
                }
            }

        );
    }

    async deleteMovie(id) {
        return await Movie.destroy(
            {
                where: {
                    id
                }
            }
        );
    }
}

export default MovieRepository;