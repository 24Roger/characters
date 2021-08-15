import Character from '../models/Character';

class CharacterRepository {
    constructor() { }

    async findAll() {
        return await Character.findAll(
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

    async findById(id) {
        return await Character.findByPk(
            id,
            {
                attributes: [
                    'name',
                    'image',
                    'age',
                    'history',
                ]
            }
        )
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