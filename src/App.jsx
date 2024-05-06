// App.jsx
import { useState } from 'react';
import UserProfile from './components/UserProfile';

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <main>
      <button onClick={() => setIsShow((cur) => !cur)}>show profile</button>
      {isShow ? <UserProfile /> : null}
    </main>
  );
}
