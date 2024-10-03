import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data + ' (from frossntend)'))
      .catch(error => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;