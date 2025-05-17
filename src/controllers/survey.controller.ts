import { Request, Response } from 'express';
import { WaitingList } from '../models/waiting-list.model';

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
