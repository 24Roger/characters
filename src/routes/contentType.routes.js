import { Router } from 'express';
import {
    getContentTypes,
    newContentType,
    modifyContentType,
    removeContentType,
} from '../controllers/contentType.controller';
import {
    getValidator,
    postValidator,
    putValidator,
    deleteValidator
} from '../middlewares/contentTypes';

const router = Router();

router.get('/contentTypes', getValidator, getContentTypes);
router.post('/contentType', postValidator, newContentType);
router.put('/contentType/:id(\\d+)/update', putValidator, modifyContentType);
router.delete('/contentType/:id(\\d+)/delete', deleteValidator, removeContentType);

export default router;