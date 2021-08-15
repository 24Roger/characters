import { Router } from 'express';
import {
    getMovies,
    getMovieById,
    newMovie,
    modifyMovie,
    removeMovie
} from '../controllers/movie.controller';
import {
    postValidator,
    putValidator,
    deleteValidator
} from '../middlewares/movies';

const router = Router();

router.get('/movie', getMovies);
router.get('/movie/:id(\\d+)', getMovieById)
router.post('/movie', postValidator, newMovie);
router.put('/movie/:id(\\d+)', putValidator, modifyMovie);
router.delete('/movie/:id(\\d+)', deleteValidator, removeMovie);

export default router;