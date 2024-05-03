import { useEffect, useState } from 'react';

// #1 Basic CleanUp
// let count = 0;
// // CleanUpFunction
// function App() {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     // Outer Fn
//     count++;
//     console.log('data change', data, count);

//     return () => {
//       console.log('## clean up phase', data, count);
//     };
//   }, [data]);

//   return <input className='border-2' value={data} onChange={(e) => setData(e.target.value)} />;
// }

// ## Component Will Unmount (ก่อนตาย)

function Input() {
  // Outer of Outer
  const [data, setData] = useState('');
  useEffect(() => {
    // Outer Scope
    console.log('I was born');
    return () => {
      // Inner Scope
      console.log("I'm gonna die with", data); // "" , Closure of 1st Render
    };
  }, []);
  return <input className='border-2' value={data} onChange={(e) => setData(e.target.value)} />;
}

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button className='bg-slate-500 p-1 text-white' onClick={() => setIsShow(!isShow)}>
        Toggle
      </button>
      {isShow && <Input />}
    </div>
  );
}
export default App;
