import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness platform for logging workouts, managing teams, and competing on a shared leaderboard.
          </p>
          <div className="d-flex gap-3 mt-4">
            <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">
              View API Health
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="https://vite.dev/" target="_blank" rel="noreferrer">
              Vite Docs
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">Ready for launch</h2>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">React 19 + Vite frontend on port 5173</li>
                <li className="list-group-item">Express + TypeScript backend on port 8000</li>
                <li className="list-group-item">MongoDB-ready Mongoose integration on port 27017</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
