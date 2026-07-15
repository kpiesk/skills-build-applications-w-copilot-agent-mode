import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  difficulty: string;
  durationMinutes: number;
}

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  difficulty: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
});

const Workout: Model<IWorkout> = mongoose.model<IWorkout>('Workout', workoutSchema);

export default Workout;
