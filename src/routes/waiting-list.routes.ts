import { Router } from 'express';
import {
  checkList,
  joinWaitingList,
} from '../controllers/waiting-list.controller';

const router = Router();

router.post('/waiting-list', joinWaitingList);
router.get('/check-list/:email', checkList);

export default router;
