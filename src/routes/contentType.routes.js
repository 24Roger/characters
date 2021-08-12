import { Router } from 'express';
import {
    getContentTypes,
    newContentType,
    modifyContentType,
    removeContentType,
} from '../controllers/contentType.controller';

const router = Router();

router.get('/contentType', getContentTypes);
router.post('/contentType', newContentType);
router.put('/contentType/:id(\\d+)', modifyContentType);
router.delete('/contentType/:id(\\d+)', removeContentType);

export default router;