import User from "../models/User";

class UserRespository {
    constructor() { }

    async findAll() {
        return await User.findAll(
            {
                attributes: [
                    'id',
                    'userName',
                    'name',
                    'email',
                ]
            }
        );
    }

    async findById(id) {
        return await User.findByPk(
            id,
            {
                attributes: [
                    'userName',
                    'name',
                    'email',
                ]
            }
        );
    }

    async createUser(user) {
        return await User.create(user);
    }

    async updateUser(id, user) {
        return await User.update(
            user,
            {
                where: {
                    id
                }
            }
        );
    }

    async deleteUser(id) {
        return await User.destroy(
            {
                where: {
                    id
                }
            }
        );
    }
}

export default UserRespository;