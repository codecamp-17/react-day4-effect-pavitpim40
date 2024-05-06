import { useState, useEffect } from 'react';

const src =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function DogImage() {
  const [feedCount, setFeedCount] = useState(0);

  //Callback :  Run After 1st Render
  useEffect(() => {
    console.log('หิววววววววววววววววว');
  }, []);

  //Callback :  Run After 1st Render && Run After Feed Count Change
  useEffect(() => {
    if (feedCount !== 0) console.log('Thank');
  }, [feedCount]);
  return (
    <div>
      <img src={src} className='w-[250px]' />
      <button onClick={() => setFeedCount((c) => c + 1)}>Feed Me: {feedCount}</button>
    </div>
  );
}
