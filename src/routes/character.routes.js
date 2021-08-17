import { Router } from 'express';
import {
    getCharacters,
    newCharacter,
    modifyCharacter,
    removeCharacter,
    characterImage
} from '../controllers/character.controller';
import {
    getValidator,
    postValidator,
    postImageValidator,
    putValidator,
    deleteValidator
} from '../middlewares/characters';

const router = Router();

router.get('/character', getValidator, getCharacters);
router.post('/character', postValidator, newCharacter);
router.post('/character/:id(\\d+)/image', postImageValidator, characterImage)
router.put('/character/:id(\\d+)', putValidator, modifyCharacter);
router.delete('/character/:id(\\d+)', deleteValidator, removeCharacter);

export default router;