import { Router } from 'express';
import {
    getMovies,
    getMovieById,
    getByIdMovieWithCharacters,
    newMovie,
    modifyMovie,
    removeMovie,
    movieImage,
    associate
} from '../controllers/movie.controller';
import {
    getValidator,
    getByIdValidator,
    postValidator,
    postImageValidator,
    putValidator,
    deleteValidator,
    associationValidator
} from '../middlewares/movies';

const router = Router();

router.get('/movies', getValidator, getMovies);
router.get('/movie/:id(\\d+)', getByIdValidator, getMovieById);
router.get('/movie/:id(\\d+)/characters', getByIdValidator, getByIdMovieWithCharacters)
router.post('/movie', postValidator, newMovie);
router.post('/movie/:id(\\d+)/image', postImageValidator, movieImage);
router.put('/movie/:id(\\d+)/update', putValidator, modifyMovie);
router.put('/movie/:idMovie(\\d+)/character/:idCharacter(\\d+)', associationValidator, associate);
router.delete('/movie/:id(\\d+)/delete', deleteValidator, removeMovie);

export default router;