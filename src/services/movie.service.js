import MovieRepository from "../respositories/movie.repository";
import ImageRepository from '../respositories/image.repository';

const movieRepository = new MovieRepository();
const imageRepository = new ImageRepository();

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
    const movie = await movieRepository.findMovieById(id);

    await imageRepository.deleteImage(movie.image);

    return await movieRepository.deleteMovie(id);
}