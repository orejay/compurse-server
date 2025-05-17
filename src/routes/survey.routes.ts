import { Router } from 'express';
import { getSurveyPage } from '../controllers/survey.controller';

const router = Router();

router.get('/survey/:token', getSurveyPage);

export default router;
