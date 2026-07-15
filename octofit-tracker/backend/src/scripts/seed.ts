import mongoose from 'mongoose';
import User from '../models/user';
import Team from '../models/team';
import Activity from '../models/activity';
import LeaderboardEntry from '../models/leaderboard';
import Workout from '../models/workout';

const connectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Ava Chen', email: 'ava.chen@example.com', role: 'captain' },
      { name: 'Noah Patel', email: 'noah.patel@example.com', role: 'member' },
      { name: 'Mina Alvarez', email: 'mina.alvarez@example.com', role: 'member' },
    ]);

    await Team.create([
      { name: 'Momentum Squad', members: 8, goal: 'Weekly consistency challenge' },
      { name: 'Rise Crew', members: 6, goal: 'Marathon prep' },
    ]);

    await Activity.create([
      { userId: String(users[0]._id), type: 'run', duration: 32, completedAt: new Date('2026-07-15') },
      { userId: String(users[1]._id), type: 'strength', duration: 45, completedAt: new Date('2026-07-15') },
      { userId: String(users[2]._id), type: 'cycling', duration: 60, completedAt: new Date('2026-07-16') },
    ]);

    await LeaderboardEntry.create([
      { name: 'Ava Chen', points: 980, rank: 1 },
      { name: 'Noah Patel', points: 910, rank: 2 },
      { name: 'Mina Alvarez', points: 875, rank: 3 },
    ]);

    await Workout.create([
      { title: 'Tempo Run', difficulty: 'moderate', durationMinutes: 35 },
      { title: 'Core Circuit', difficulty: 'easy', durationMinutes: 20 },
      { title: 'Hill Intervals', difficulty: 'hard', durationMinutes: 40 },
    ]);

    console.log('Seed completed successfully');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
