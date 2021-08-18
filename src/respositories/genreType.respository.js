import GenreType from '../models/GenreType';

class GenreTypeRepository {
    constructor() { }

    async findAll() {
        return await GenreType.findAll(
            {
                attributes: [
                    'id',
                    'genre'
                ]
            }
        );
    }

    async findGenreById(id) {
        return await GenreType.findByPk(
            id,
            {
                attributes: [
                    'id',
                    'genre'
                ]
            }
        );
    }

    async findByGenre(genre) {
        return await GenreType.findOne(
            {
                where: {
                    genre
                },
                attributes: [
                    'id',
                    'genre'
                ]
            }
        );
    }

    async createGenreType(genre) {
        return await GenreType.create(genre);
    }

    async updateGenreType(id, genre) {
        return await GenreType.update(
            genre,
            {
                where: {
                    id
                }
            }
        );
    }

    async deleteGenreType(id) {
        return await GenreType.destroy(
            {
                where: {
                    id
                }
            }
        );
    }
}

export default GenreTypeRepository;