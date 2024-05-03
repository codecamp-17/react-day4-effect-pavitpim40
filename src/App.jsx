import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');

  // useEffect มีแค่ callback / ไม่มี array : effect จะรันทุกการ render
  // useEffect(() => {
  //   console.log('#2 : Effect Run Every Render / Rerender');
  // });

  // empty deps array : useEffect จะรันแค่ 1 ครั้ง (First Render)
  // useEffect(() => {
  //   console.log('#1 : After First Render : Component Did Mount');
  // }, []);

  // watch count : 1st Render + Count Change
  // useEffect(() => {
  //   console.log('#3 : Run เมื่อ  1st Render, Count เปลี่ยน');
  // }, [count]);

  // useEffect(() => {
  //   console.log('#4 : Run เมื่อ  1st Render, username เปลี่ยน');
  // }, [username]);

  useEffect(() => {
    console.log('#5 : Run เมื่อ  1st Render, username หรือ Count เปลี่ยน');
  }, [username, count]);

  const handleClick = () => setCount((c) => c + 1);
  const handleChange = (e) => setUsername(e.target.value);
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='p-1 px-2 bg-black text-white rounded-md' onClick={handleClick}>
        increase
      </button>
      <div className='flex flex-col'>
        <label>username</label>
        <input
          className='border-blue-950 border-solid border-2'
          value={username}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
