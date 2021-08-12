import { Router } from 'express';
import {
    getMovies,
    getMovieById,
    newMovie,
    modifyMovie,
    removeMovie
} from '../controllers/movie.controller';

const router = Router();

router.get('/movie', getMovies);
router.get('/movie/:id(\\d+)', getMovieById)
router.post('/movie', newMovie);
router.put('/movie/:id(\\d+)', modifyMovie);
router.delete('/movie/:id(\\d+)', removeMovie);

export default router;