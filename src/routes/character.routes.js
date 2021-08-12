import { Router } from 'express';
import {
    getCharacters,
    newCharacter,
    modifyCharacter,
    removeCharacter,
} from '../controllers/character.controller';

const router = Router();

router.get('/character', getCharacters);
router.post('/character', newCharacter);
router.put('/character/:id(\\d+)', modifyCharacter);
router.delete('/character/:id(\\d+)',removeCharacter);

export default router;