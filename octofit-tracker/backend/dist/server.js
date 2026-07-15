"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const user_1 = __importDefault(require("./models/user"));
const team_1 = __importDefault(require("./models/team"));
const activity_1 = __importDefault(require("./models/activity"));
const leaderboard_1 = __importDefault(require("./models/leaderboard"));
const workout_1 = __importDefault(require("./models/workout"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl });
});
app.get(['/api/users', '/api/users/'], async (_req, res) => {
    const users = await user_1.default.find({}).lean();
    res.json({ apiUrl: `${apiBaseUrl}/api/users`, count: users.length, results: users });
});
app.get(['/api/teams', '/api/teams/'], async (_req, res) => {
    const teams = await team_1.default.find({}).lean();
    res.json({ apiUrl: `${apiBaseUrl}/api/teams`, count: teams.length, results: teams });
});
app.get(['/api/activities', '/api/activities/'], async (_req, res) => {
    const activities = await activity_1.default.find({}).lean();
    res.json({ apiUrl: `${apiBaseUrl}/api/activities`, count: activities.length, results: activities });
});
app.get(['/api/leaderboard', '/api/leaderboard/'], async (_req, res) => {
    const leaderboard = await leaderboard_1.default.find({}).sort({ rank: 1 }).lean();
    res.json({ apiUrl: `${apiBaseUrl}/api/leaderboard`, count: leaderboard.length, results: leaderboard });
});
app.get(['/api/workouts', '/api/workouts/'], async (_req, res) => {
    const workouts = await workout_1.default.find({}).lean();
    res.json({ apiUrl: `${apiBaseUrl}/api/workouts`, count: workouts.length, results: workouts });
});
app.get('/', (_req, res) => {
    res.send('OctoFit Tracker backend is running');
});
(0, database_1.default)().finally(() => {
    app.listen(port, () => {
        console.log(`Backend listening on port ${port}`);
    });
});
