import express from 'express';
import connectDB from './config/database';
import User from './models/user';
import Team from './models/team';
import Activity from './models/activity';
import LeaderboardEntry from './models/leaderboard';
import Workout from './models/workout';

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl });
});

app.get(['/api/users', '/api/users/'], async (_req, res) => {
  const users = await User.find({}).lean();
  res.json({ apiUrl: `${apiBaseUrl}/api/users`, count: users.length, results: users });
});

app.get(['/api/teams', '/api/teams/'], async (_req, res) => {
  const teams = await Team.find({}).lean();
  res.json({ apiUrl: `${apiBaseUrl}/api/teams`, count: teams.length, results: teams });
});

app.get(['/api/activities', '/api/activities/'], async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json({ apiUrl: `${apiBaseUrl}/api/activities`, count: activities.length, results: activities });
});

app.get(['/api/leaderboard', '/api/leaderboard/'], async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find({}).sort({ rank: 1 }).lean();
  res.json({ apiUrl: `${apiBaseUrl}/api/leaderboard`, count: leaderboard.length, results: leaderboard });
});

app.get(['/api/workouts', '/api/workouts/'], async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json({ apiUrl: `${apiBaseUrl}/api/workouts`, count: workouts.length, results: workouts });
});

app.get('/', (_req, res) => {
  res.send('OctoFit Tracker backend is running');
});

connectDB().finally(() => {
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
});
