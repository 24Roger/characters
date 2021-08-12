import GenreTypeRepository from "../respositories/genreType.respository";

const genreTypeRepository = new GenreTypeRepository();

export const findAll = async () => {
    return await genreTypeRepository.findAll();
}

export const findById = async (id) => {
    return await genreTypeRepository.findById(id);
}

export const findByGenre = async (genre) => {
    return await genreTypeRepository.findByGenre(genre);
}

export const createGenreType = async (genre) => {
    return await genreTypeRepository.createGenreType(genre);
}

export const updateGenreType = async (id, genre) => {
    return await genreTypeRepository.updateGenreType(id, genre);
}

export const deleteGenreType = async (id) => {
    return await genreTypeRepository.deleteGenreType(id);
}