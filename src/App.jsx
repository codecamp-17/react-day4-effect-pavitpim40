import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
    // task-1 เขียนโค้ดสำหรับ Fetch user จาก https://jsonplaceholder.typicode.com/users/1
    // task-3 นำข้อมูลที่ได้จากการ Fetch มาอัพเดท user state
    // task-2 นำฟังก์ชัน fetchUser ไป binding กับ ปุ่ม
    // task-4 ลองดูผลลัพธ์ผ่าน browser + อธิบาย code ให้ตัวเองเข้าใจ
  };
  return (
    <main>
      {user ? (
        <>
          <h1>name : {user.name}</h1>
          <h2>email : {user.email}</h2>
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
      <button className='bg-slate-500 p-1 rounded-md text-white' onClick={fetchUser}>
        fetch user
      </button>
    </main>
  );
}
