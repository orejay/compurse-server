import { Schema, model } from 'mongoose';

const waitingListSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
    used: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const WaitingList = model('WaitingList', waitingListSchema);
