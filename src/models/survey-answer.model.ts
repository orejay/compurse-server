import mongoose, { model } from 'mongoose';

const answerSchema = new mongoose.Schema({
  sectionId: {
    type: String,
    required: true,
  },
  questionId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: [
      'text',
      'radio',
      'radio-with-other',
      'checkbox',
      'checkbox-with-other',
      'location',
    ],
    required: true,
  },
  answer: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const SurveyAnswer = model('SurveyAnswer', answerSchema);
