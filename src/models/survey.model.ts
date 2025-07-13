import mongoose, { model } from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionId: String,
  text: String,
  type: String,
  required: Boolean,
  max: Number,
  options: [
    {
      value: String,
      label: String,
    },
  ],
});

const sectionSchema = new mongoose.Schema({
  sectionId: String,
  title: String,
  questions: [questionSchema],
});

export const SurveyQuestion = model('SurveyQuestion', sectionSchema);
