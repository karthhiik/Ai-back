import React from 'react';
import { useAPI } from '../contexts/APIContext';

function App() {
  const { users, startups, loading, error } = useAPI();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Baraise Collaboration Zone</h1>

      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Startups</h2>
      <ul>
        {startups.map(startup => (
          <li key={startup.id}>{startup.name}</li>
        ))}
      </ul>

      {/* ... Display other data (collaborations, events) ... */}
    </div>
  );
}

export default App;