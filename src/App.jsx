import { useEffect, useState } from 'react';
import axios from 'axios';

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

// ## 2 Component Will Unmount (ก่อนตาย)

// function Input() {
//   // Outer of Outer
//   const [data, setData] = useState('');
//   useEffect(() => {
//     // Outer Scope
//     console.log('I was born');
//     return () => {
//       // Inner Scope
//       console.log("I'm gonna die with", data); // "" , Closure of 1st Render
//     };
//   }, []);
//   return <input className='border-2' value={data} onChange={(e) => setData(e.target.value)} />;
// }

// function App() {
//   const [isShow, setIsShow] = useState(false);
//   return (
//     <div>
//       <button className='bg-slate-500 p-1 text-white' onClick={() => setIsShow(!isShow)}>
//         Toggle
//       </button>
//       {isShow && <Input />}
//     </div>
//   );
// }

// ## 3 : Multiple Request
let count = 0;
function App() {
  const [data, setData] = useState('');
  const [users, setUser] = useState([]);

  // Multi Request
  // useEffect(() => {
  //   searchUser();
  //   count++;
  // }, [data]);

  // Fixed : Debounce
  useEffect(() => {
    let registerId = setTimeout(() => {
      searchUser();
    }, 3000);
    console.log('ID', registerId);
    return () => {
      console.log('ID-CleanUp', registerId);
      clearTimeout(registerId);
    };
  }, [data]);

  const searchUser = async () => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUser(response.data);
      console.log('APIs ', count, response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        className='bg-black text-white'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
}
export default App;
