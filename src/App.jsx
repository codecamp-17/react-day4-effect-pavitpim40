import { useState } from 'react';
import DogImage from './components/DogImage';

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <main>
      <button onClick={() => setIsShow((cur) => !cur)}>toggle image</button>
      {isShow ? <DogImage /> : null}
    </main>
  );
}
