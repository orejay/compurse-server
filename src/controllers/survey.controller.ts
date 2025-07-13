import { Request, Response } from 'express';
import { WaitingList } from '../models/waiting-list.model';
import { SurveyQuestion } from '../models/survey.model';
import { surveySeed } from '../utils/seed/survey';
import { SurveyAnswer } from '../models/survey-answer.model';

export const getSurveyPage = async (req: Request, res: Response) => {
  const { token } = req.params;

  const isUser = await WaitingList.findOne({ token });

  if (!isUser) {
    res.status(403).json({ error: 'The user not on our waiting list.' });
    return;
  }

  res.status(200).json({ message: 'The user is on the waiting list' });
  return;
};

export const addQuestions = async (req: Request, res: Response) => {
  try {
    await SurveyQuestion.deleteMany({});
    const inserted = await SurveyQuestion.insertMany(surveySeed);
    res.status(201).json({
      message: 'Survey questions seeded successfully',
      count: inserted.length,
    });
  } catch (error) {
    console.error('Seeding failed:', error);
    res.status(500).json({ error: 'Failed to seed survey' });
  }
};

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await SurveyQuestion.find({});
    res.status(200).json({ data: questions });
  } catch (error) {
    console.error('Fetching questions failed:', error);
    res.status(500).json({ error: 'Failed to get survey questions' });
  }
};

export const submitAnswers = async (req: Request, res: Response) => {
  try {
    const { userEmail, answers } = req.body;

    if (!userEmail || !Array.isArray(answers)) {
      res.status(400).json({ error: 'Invalid payload' });
      return;
    }

    // const isSubmitted = await SurveyAnswer.findOne({
    //   userEmail,
    // });

    // if (isSubmitted) {
    //   res.status(403).json({ error: 'User has already completed the survey' });
    // }

    const formattedAnswers = answers.map((ans) => ({
      sectionId: ans.sectionId,
      questionId: ans.questionId,
      userEmail,
      type: ans.type,
      answer: ans.answer,
    }));

    await SurveyAnswer.insertMany(formattedAnswers);

    res.status(201).json({ message: 'Survey answers submitted successfully' });
  } catch (err) {
    console.error('Error saving survey answers:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
