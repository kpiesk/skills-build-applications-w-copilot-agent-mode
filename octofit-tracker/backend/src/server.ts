import express from 'express';
import connectDB from './config/database';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

app.get('/', (_req, res) => {
  res.send('OctoFit Tracker backend is running');
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
});
