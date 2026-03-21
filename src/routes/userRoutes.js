import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import {
  getUserController,
  updateUserAvatar,
} from '../controllers/userController.js';
import { upload } from '../middleware/multer.js';

const router = Router();

router.get('/users/me', authenticate, getUserController);

router.patch(
  '/users/me/avatar',
  authenticate,
  upload.single('avatar'),
  updateUserAvatar,
);

export default router;
