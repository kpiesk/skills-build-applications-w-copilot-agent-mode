import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const envNote = codespaceName && codespaceName.trim()
    ? `Using Codespaces URL for ${codespaceName}`
    : 'Using localhost fallback for API requests';

  return (
    <main className="container py-5">
      <div className="row g-4 align-items-start">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A multi-tier fitness platform for logging workouts, managing teams, and comparing results on a shared leaderboard.
          </p>
          <p className="text-muted small">{envNote}</p>
          <div className="d-flex flex-wrap gap-2 mt-4">
            <NavLink className="btn btn-outline-primary" to="/users">Users</NavLink>
            <NavLink className="btn btn-outline-primary" to="/teams">Teams</NavLink>
            <NavLink className="btn btn-outline-primary" to="/activities">Activities</NavLink>
            <NavLink className="btn btn-outline-primary" to="/leaderboard">Leaderboard</NavLink>
            <NavLink className="btn btn-outline-primary" to="/workouts">Workouts</NavLink>
          </div>
          <div className="mt-4">
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="/users" element={<Users />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/workouts" element={<Workouts />} />
            </Routes>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">Environment setup</h2>
              <p className="text-muted small mb-3">
                Define <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> for Codespaces URLs such as https://your-name-8000.app.github.dev/api/users/.
              </p>
              <p className="text-muted small mb-0">
                If it is not set, the app falls back to localhost and uses http://localhost:8000/api/… instead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
