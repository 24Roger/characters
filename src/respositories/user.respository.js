import bcrypt from 'bcrypt';
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
                    'role',
                    'enable'
                ]
            }
        );
    }

    async findById(id) {
        return await User.findByPk(
            id,
            {
                attributes: [
                    'id',
                    'userName',
                    'name',
                    'email',
                    'role',
                    'enable'
                ]
            }
        );
    }

    async findUserName(userName) {
        return await User.findOne(
            {
                where: {
                    userName
                }
            }
        )
    }

    async findEmail(email) {
        return await User.findOne(
            {
                where: {
                    email
                }
            }
        )
    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);

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