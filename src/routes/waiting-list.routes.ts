import { Router } from 'express';
import { joinWaitingList } from '../controllers/waiting-list.controller';

const router = Router();

router.post('/waiting-list', joinWaitingList);

export default router;
