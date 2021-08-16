import { Router } from 'express';
import {
    loginUser,
    registerUser
} from '../controllers/auth.controllers';
import {
    loginValidator,
    registerValidator
} from '../middlewares/auth';

const router = Router();

router.post('/auth/login', loginValidator, loginUser);
router.post('/auth/register', registerValidator, registerUser);

export default router;