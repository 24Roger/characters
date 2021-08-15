import { Router } from 'express';
import {
    getAllUsers,
    newUser,
    modifyUser,
    removeUser
} from '../controllers/user.controller';
import {
    postValidator,
    putValidator,
    deleteValidator
} from '../middlewares/users';

const router = Router();

router.get('/user', getAllUsers);
router.post('/user', postValidator, newUser);
router.put('/user/:id(\\d+)', putValidator, modifyUser);
router.delete('/user/:id(\\d+)', deleteValidator, removeUser);

export default router;