import { Router } from 'express';
import { addQuestions } from '../controllers/survey.controller';

const router = Router();

router.get('/seed/survey', addQuestions);

export default router;
