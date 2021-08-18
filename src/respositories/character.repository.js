import { Op } from 'sequelize';
import Character from '../models/Character';
import Movie from '../models/Movie';

class CharacterRepository {
    constructor() { }

    async findAll({ name }) {
        let where = {};

        if (name) {
            where.name = {
                [Op.like]: `%${name}%`
            }
        }

        return await Character.findAll(
            {
                where,
                attributes: [
                    'id',
                    'name',
                    'image',
                    'age',
                    'history',
                ]
            }
        );
    }

    async findCharacterById(id) {
        return await Character.findByPk(
            id,
            {
                attributes: [
                    'id',
                    'name',
                    'image',
                    'age',
                    'history',
                ]
            }
        );
    }

    async findCharacterByName(name) {
        return await Character.findOne(
            {
                where: {
                    name,
                }
            }
        )
    }

    async findByIdCharacterWithMovies(id) {
        return await Character.findByPk(
            id,
            {
                include: [
                    {
                        model: Movie,
                        as: 'movies',
                        attributes: [
                            'id',
                            'title',
                            'image',
                            'creationDate',
                            'calification',
                        ]
                    }
                ],
                attributes: [
                    'id',
                    'name',
                    'image',
                    'age',
                    'history',
                ]
            }
        );
    }

    async createCharacter(character) {
        return await Character.create(character);
    }

    async updateCharacter(id, character) {
        return await Character.update(
            character,
            {
                where: {
                    id
                }
            }
        );
    }

    async deleteCharacter(id) {
        return await Character.destroy(
            {
                where: {
                    id
                }
            }
        );
    }
}

export default CharacterRepository;