import { Router } from 'express';
import {
    getCharacters,
    getCharacterById,
    getByIdCharacterWithMovies,
    newCharacter,
    modifyCharacter,
    removeCharacter,
    characterImage,
    associate
} from '../controllers/character.controller';
import {
    getValidator,
    getByIdValidator,
    postValidator,
    postImageValidator,
    putValidator,
    associationValidator,
    deleteValidator
} from '../middlewares/characters';

const router = Router();

router.get('/character', getValidator, getCharacters);
router.get('/character/:id(\\d+)', getByIdValidator, getCharacterById);
router.get('/character/:id(\\d+)/movies', getByIdValidator, getByIdCharacterWithMovies);
router.post('/character', postValidator, newCharacter);
router.post('/character/:id(\\d+)/image', postImageValidator, characterImage);
router.put('/character/:id(\\d+)', putValidator, modifyCharacter);
router.put('/character/:idCharacter(\\d+)/movie/:idMovie(\\d+)', associationValidator, associate);
router.delete('/character/:id(\\d+)', deleteValidator, removeCharacter);

export default router;