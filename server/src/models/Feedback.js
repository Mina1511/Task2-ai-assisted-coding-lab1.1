import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
  {
    workshopCode: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// Compound unique index: a user can only submit feedback for a workshop once
feedbackSchema.index({ workshopCode: 1, submittedBy: 1 }, { unique: true });

export const Feedback = mongoose.model('Feedback', feedbackSchema);
