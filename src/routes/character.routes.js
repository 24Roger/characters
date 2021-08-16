import { Router } from 'express';
import {
    getCharacters,
    newCharacter,
    modifyCharacter,
    removeCharacter,
} from '../controllers/character.controller';
import {
    getValidator,
    postValidator,
    putValidator,
    deleteValidator
} from '../middlewares/characters';

const router = Router();

router.get('/character', getValidator, getCharacters);
router.post('/character', postValidator, newCharacter);
router.put('/character/:id(\\d+)', putValidator, modifyCharacter);
router.delete('/character/:id(\\d+)', deleteValidator, removeCharacter);

export default router;