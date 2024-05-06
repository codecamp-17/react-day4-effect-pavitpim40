import { useState, useEffect } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (email.includes('@')) setIsError(false);
    else setIsError(true);
  }, [email]);
  return (
    <main>
      <input
        type='email'
        className='border-2'
        style={{ borderColor: isError ? 'red' : 'green' }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </main>
  );
}
