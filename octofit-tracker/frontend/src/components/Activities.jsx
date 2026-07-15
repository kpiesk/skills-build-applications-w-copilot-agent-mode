import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/activities/`);
        if (!response.ok) {
          throw new Error('Unable to load activities');
        }
        const payload = await response.json();
        setActivities(Array.isArray(payload) ? payload : payload.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  return (
    <section>
      <h2 className="h4">Activities</h2>
      {loading && <p>Loading activities...</p>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group mt-3">
        {activities.map((activity) => (
          <li className="list-group-item" key={activity.id || activity._id || activity.type}>
            <strong>{activity.type}</strong> — {activity.duration} min on {activity.completedAt || 'unknown date'}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
