import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function doFetch() {
      const response = await fetch('/api/hello');
      const result = await response.json();
      setMessage(result.message);
    }
    doFetch();

    // fetch('/api/hello')
    //   .then((response) => response.json())
    //   .then((result) => setMessage(result.message));
  }, []);

  return (
    <div>
      <p>Hello Vite + React!</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
