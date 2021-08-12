import { Router } from 'express';
import {
    getAllUsers,
    newUser,
    modifyUser,
    removeUser
} from '../controllers/user.controller';

const router = Router();

router.get('/user', getAllUsers);
router.post('/user', newUser);
router.put('/user/:id(\\d+)',modifyUser);
router.delete('/user/:id(\\d+)', removeUser);

export default router;