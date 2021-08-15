import MovieRepository from "../respositories/movie.repository";

const movieRepository = new MovieRepository();

export const findAll = async (filter, options) => {
    return await movieRepository.findAll(filter, options);
}

export const findMovieById = async (id) => {
    return await movieRepository.findMovieById(id);
}

export const createMovie = async (movie) => {
    return await movieRepository.createMovie(movie);
}

export const updateMovie = async (id, movie) => {
    return await movieRepository.updateMovie(id, movie);
}

export const deleteMovie = async (id) => {
    return await movieRepository.deleteMovie(id);
}