import { Router } from 'express';
import {
    getGenreTypes,
    newGenreType,
    modifyGenreType,
    removeGenreType,
} from '../controllers/genreType.controller';

const router = Router();

router.get('/genreType', getGenreTypes);
router.post('/genreType', newGenreType);
router.put('/genreType/:id(\\d+)', modifyGenreType);
router.delete('/genreType/:id(\\d+)', removeGenreType);

export default router;