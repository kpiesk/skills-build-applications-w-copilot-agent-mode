import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  name: string;
  points: number;
  rank: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  name: { type: String, required: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true },
});

const LeaderboardEntry: Model<ILeaderboardEntry> = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);

export default LeaderboardEntry;
