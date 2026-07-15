import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  duration: number;
  completedAt: Date;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  completedAt: { type: Date, default: Date.now },
});

const Activity: Model<IActivity> = mongoose.model<IActivity>('Activity', activitySchema);

export default Activity;
