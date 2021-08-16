import { Router } from 'express';
import {
    getGenreTypes,
    newGenreType,
    modifyGenreType,
    removeGenreType,
} from '../controllers/genreType.controller';
import {
    getValidator,
    postValidator,
    putValidator,
    deleteValidator
} from '../middlewares/genreTypes';

const router = Router();

router.get('/genreType', getValidator, getGenreTypes);
router.post('/genreType', postValidator, newGenreType);
router.put('/genreType/:id(\\d+)', putValidator, modifyGenreType);
router.delete('/genreType/:id(\\d+)', deleteValidator, removeGenreType);

export default router;