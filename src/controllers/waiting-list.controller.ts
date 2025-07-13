import { Request, Response } from 'express';
import { WaitingList } from '../models/waiting-list.model';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const checkList = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    let existing = await WaitingList.findOne({ email });

    if (existing) {
      res.status(200).json({
        message: 'User is already on the waiting list.',
      });
      return;
    }

    res.status(200).json({
      message: 'User is not on the list',
    });
  } catch (error) {
    console.error('Error checking waiting list:', error);
    res.status(500).json({
      error: 'Something went wrong. Please try again later.',
    });
    return;
  }
};

export const joinWaitingList = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    let existing = await WaitingList.findOne({ email });

    if (existing) {
      res.status(200).json({
        message: "You're already on our waiting list. Kindly check your email",
      });
      return;
    }

    const token = crypto.randomBytes(32).toString('hex');

    const surveyLink = `https://compurse.io/survey/${token}`;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Compurse" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Compurse Survey Link',
      text: `Complete the survey here: ${surveyLink}`,
    });

    console.log('email send', info.messageId);

    const newUser = new WaitingList({ email, token });
    await newUser.save();

    res.status(201).json({
      message:
        'You have been added to the waiting list. Kindly Check your email.',
    });
    return;
  } catch (error) {
    console.error('Error adding user to waiting list:', error);
    res.status(500).json({
      error: 'Something went wrong. Please try again later.',
    });
    return;
  }
};
