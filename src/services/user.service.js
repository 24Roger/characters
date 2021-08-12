import UserRespository from '../respositories/user.respository';

const userRespository = new UserRespository();

export const findAll = async () => {
    return await userRespository.findAll({});
}

export const findById = async (id) => {
    return await userRespository.findById(id);
}

export const createUser = async (user) => {
    return await userRespository.createUser(user);
}

export const updateUser = async (id, user) => {
    return await userRespository.updateUser(id, user);
}

export const deleteUser = async (id) => {
    return await userRespository.deleteUser(id);
}