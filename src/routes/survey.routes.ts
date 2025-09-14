import { Router } from 'express';
import {
  getAnswerCount,
  getQuestions,
  getSurveyPage,
  submitAnswers,
} from '../controllers/survey.controller';

const router = Router();

router.get('/survey/:token', getSurveyPage);
router.get('/survey-questions', getQuestions);
router.post('/submit-survey', submitAnswers);
router.get('/survey-count', getAnswerCount);

export default router;
