# useEffect Lab : Part-1 (Basic Usage)

## Lab1 : Component Did Mount

### objective

- เข้าใจลำดับการทำงานของโค้ดเมื่อ component มีการ render ครั้งแรก (mount หรือ first render)

### pre-setup

- กำหนดฟังก์ชันคอมโพเนนท์ `<App/>` ให้
- ฟังก์ชันคอมโพเนนท์นี้ทำหน้าที่ render(แสดงผลข้อความ) ว่า Hello, React

```jsx
// App.jsx
export default function App() {
  return <main>Hello, React</main>;
}
```

- ฟังก์ชันคอมโพเนนท์ `<App/>` จะถูก render 1 ครั้งเสมอเมื่อเริ่มเข้า App หรือทำการรีเฟรช browser (โดย ReactDOM)

```jsx
// main.jsx or index.js
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

### task

1.  ก่อนที่ฟังก์ชันคอมโพเนนท์ `<App/>` จะมีการ render 1 ครั้ง
    ให้แสดงข้อความ "Before render" 1 ครั้งด้วยการ alert

2.  หลังจากฟังก์ชันคอมโพเนนท์ `<App/>` มีการ render 1 ครั้ง
    ให้แสดงข้อความ "After render" 1 ครั้งด้วยการ alert

3.  อธิบาย`ลำดับการทำงาน`ของโค้ดให้ตัวเองเข้าใจว่าโค้ดบรรทัดไหนทำงานก่อน และบรรทัดไหนทำงานทีหลัง

## Lab2 : Component Will UnMount

### objective

- เข้าใจลำดับการทำงานของโค้ดเมื่อ component ถูก unmount (ถอดออกจาก browser dom) หรือไม่มีการแสดงผล

### pre-setup

- กำหนดฟังก์ชันคอมโพเนนท์ `<DogImage/>` ให้
- ฟังก์ชันคอมโพเนนท์นี้ทำหน้าที่ render แท็ก <img/> ด้วยรูปสุนัข

```jsx
// src/components/DogImage.jsx
const src =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function DogImage() {
  return <img src={src} />;
}
```

- กำหนดฟังก์ชันคอมโพเนนท์ `<App/>` ให้
- ฟังก์ชันคอมโพเนนท์นี้มีปุ่มสำหรับเปลี่ยน boolean state สำหรับแสดงผล
  - เมื่อ state เป็น true จะแสดงคอมโพเนนท์ `<DogImage/>`
  - เมื่อ state เป็น false จะไม่แสดงผลใดๆ (นอกจากปุ่มกด)

```jsx
// App.jsx
import { useState } from 'react';
import DogImage from './components/DogImgage';

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <main>
      {isShow ? <DogImage /> : null}
      <button onClick={() => setIsShow((cur) => !cur)}>togge image</button>
    </main>
  );
}
```

### task

1.  หลังจากฟังก์ชันคอมโพเนนท์ `<DogImage/>` มีการ render 1 ครั้ง
    ให้แสดงข้อความ "Hi my name is จุ๊มเหม่ง" 1 ครั้งด้วยการ alert

2.  หลังจากฟังก์ชันคอมโพเนนท์ `<DogImage/>` หายไปจาก browser
    ให้แสดงข้อความ "Goodbye from จุ๊มเหม่ง" 1 ครั้งด้วยการ alert

3.  อธิบาย`ลำดับการทำงาน`ของโค้ดให้ตัวเองเข้าใจว่าโค้ดในฟังก์ชันคอมโพเนนท์ `<DogImage/>`มีลำดับการทำงานอย่างไร

## Lab3 : Component Did Update

### objective

- เข้าใจลำดับการทำงานของโค้ดใน function component และ useEffect เมื่อ component ถูก render ใหม่ (rerender, update)
- ใช้งาน useState ร่วมกับ useEffect ได้

### pre-setup

- กำหนดฟังก์ชันคอมโพเนนท์ `<DogImage/>` ให้
- ฟังก์ชันคอมโพเนนท์นี้ทำหน้าที่ render แท็ก <img/> ด้วยรูปสุนัข
- มีปุ่มสำหรับให้อาหาร โดยจำนวนอาหารถูกกำหนดเป็น react state
- เมื่อกดปุ่มจำนวนอาหารจะเพิ่มขึ้นทีละ 1

```jsx
// src/components/DogImage.jsx
import { useState } from 'react';

const src =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function DogImage() {
  const [feedCount, setFeedCount] = useState(0);
  return (
    <div>
      <img src={src} />
      <button onClick={()=>setFeedCount(c=>c+1)}>Feed Me<button/>
    </div>
  );
}
```

- กำหนดฟังก์ชันคอมโพเนนท์ `<App/>` ให้
- ฟังก์ชันคอมโพเนนท์นี้มีปุ่มสำหรับเปลี่ยน boolean state สำหรับแสดงผล
  - เมื่อ state เป็น true จะแสดงคอมโพเนนท์ `<DogImage/>`
  - เมื่อ state เป็น false จะไม่แสดงผลใดๆ (นอกจากปุ่มกด)

```jsx
// App.jsx
import { useState } from 'react';
import DogImage from './components/DogImgage';

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <main>
      {isShow ? <DogImage /> : null}
      <button onClick={() => setIsShow((cur) => !cur)}>togge image</button>
    </main>
  );
}
```

### task

1. เมื่อยังไม่มีการให้อาหารจุ๊มเหม่ง ให้จุ๊มเหม่ง alert ว่า "หิววววววววววว"

2. เมื่อมีการให้อาหารจุ๊มเหม่งในแต่ละครั้งให้จุ๊มเหม่ง alert ว่า "Thank!"

3. ทุกๆการให้อาหาร 5 ครั้งให้จุ๊มเหม่ง alert ว่า "Thank you my lord"
4. เมื่อให้อาหารครบ 10 ครั้งให้จุ๊มเหม่ง alert ว่า "ผมอิ่มแล้วฮะ" จากนั้นปุ่มให้อาหารก็หายไป

## Lab4 : Real time Validation

### objective

- เข้าใจลำดับการทำงานของโค้ดใน function component และ useEffect เมื่อ component ถูก render ใหม่ (rerender, update)
- ใช้งาน useState ร่วมกับ useEffect ได้

### pre-setup

- กำหนดฟังก์ชันคอมโพเนนท์ `<App/>` ให้
- ฟังก์ชันคอมโพเนนท์นี้ทำหน้าที่รับ input จาก user มาเก็บไว้ใน state

```jsx
// App.jsx
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  return (
    <main>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
    </main>
  );
}
```

### task

1. ทุกครั้งที่ผู้ใช้งานพิมพ์ให้ทำการ validate email (พิมพ์ 1 ครั้ง == validate 1 รอบ)

- validate โดยเช็คว่าข้อความมี "@" หรือไม่
- ถ้ามีให้เปลี่ยน border ของ `<input/>` เป็นสีเขียว
- ถ้าไม่มีให้เปลี่ยน border ของ `<input/>` เป็นสีแดง

## Lab-5 (handOns useEffect)

### objective

- ใช้งาน useEffect ให้คล่อง ด้วยการเขียนโค้ดเองทั้งหมด
- ใช้งาน useState ร่วมกับ useEffect ได้

### pre-setup

```jsx
// App.jsx
export default function App() {
  return <div>Hello, React App</div>;
}
```

### task-A

1.ในฟังก์ชันคอมโพเนนท์ `<App/>` ให้สร้างฟังก์ชันที่ชื่อว่า logMyName สำหรัับแสดงชื่อจริง-นามสกุลตัวเองผ่าน alert  
2. ให้เรียกใช้งานฟังกฺชัน logMyName เพียง 1 ครั้งหลังจากที่ `<App/>` มีการ render แล้ว 1 ครั้ง  
3. สังเกตว่าขณะที่มีกล่องข้อความ alert ที่ browser มีข้อความแสดงว่า Hello, React App หรือไม่ เพราะอะไร (อธิบายตัวเอง)

### task-B

1. แก้ไขฟังก์ชัน logMyProfile ให้แสดงอายุปัจจุบันของตัวเองเพิ่มเติม

2.สร้าง state สำหรับจัดการค่าอายุ  
3.สร้าง UI เป็นปุ่มที่มีข้อความว่า `increase my age`
4.ทำปุ่มให้เพิ่มอายุทีละ 1 ได้
5.ทุกครั้งที่อายุเพิ่มให้เรียกใช้งานฟังก์ชัน logMyProfile

### task-C

1.สร้าง state (ชื่อว่า fullName) สำหรับเก็บชื่อจริงและนามสกุลเป็น Object  
2. นำ state ของ fullName ไปใช้ใน logMyProfile  
3. สร้าง ui สำหรับเปลี่ยนชื่อ `<input/>` และ `<button>change name</button>`  
4. ทำการผูก state (ตั้งชื่อว่า newFirstName) เข้ากับ ui `<input />` ดังกล่าว  
5. เมื่อกดปุ่ม change ให้ทำการเปลี่ยน state ที่ชื่อว่า fullName  
6. เมื่อ fullName เปลี่ยนให้ทำการเรียกใช้ฟังก์ชัน logMyProfile อีกครั้ง  
7. ทำซ้ำข้อ 3-6 โดยเปลี่ยนเป็น lastName

# useEffect Lab : Part-2 (Data Fetching & CleanUp)

## Lab1 : fetch after first render

### objective

- เข้าใจวิธีการ fetch ข้อมูลจาก API เพื่อมาเป็น state ของ component
- เข้าใจวิธีการ fetch เมื่อ component ถูก mounted

### pre-setup

- ในฟังก์ชันคอมโพเนนท์ `<App/>` มี state ของ user เริ่มต้นเป็น null
- หน้า UI จะแสดงผลเริ่มต้นว่า `Loading.....`
- มีฟังก์ชันชื่อว่า fetchUser ที่ยังเขียนไม่สมบูรณ์และยังไม่ได้ผูกกับปุ่ม

```jsx
// App.jsx
import { useState } from 'react';

export default function App() {
  const [user, setIsShow] = useState(null);
  const fetchUser = () => {
    // task-1 เขียนโค้ดสำหรับ Fetch user จาก https://jsonplaceholder.typicode.com/users/1
    // task-2 นำข้อมูลที่ได้จากการ Fetch มาอัพเดท user state
    // task-3 นำฟังก์ชัน fetchUser ไป binding กับ ปุ่ม
    // task-4 ลองดูผลลัพธ์ผ่าน browser + อธิบาย code ให้ตัวเองเข้าใจ
  };
  return (
    <main>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
      <button>fetch user</button>
    </main>
  );
}
```

### task

- ทำการ improve ตัว code ให้มีการ fetch ข้อมูลทันทีเมื่อมีการ render `<App/>` แล้ว 1 รอบ

## Lab-2 : fetch after first render

### objective

- เข้าใจวิธีการ fetch เมื่อ component ถูก mounted

### pre-setup

- ฟังก์ชันคอมโพเนนต์ `<UserProfile/>` สำหรับแสดงผลข้อมูล user

```jsx
// src/components/UserProfile
export default function UserProfile() {
  const user = null;

  // write you code for fetchUser
  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
}
```

- ฟังก์ชันคอมโพเนนต์ `<App/>` สำหรับสลับ mode การ แสดงผล `<UserProfile>`

```jsx
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
```

### task

- task-1 : ทำให้การ fetch ข้อมูลจาก `https://jsonplaceholder.typicode.com/users/1` เมื่อฟังก์ชันคอมโพเนนท์ `<UserProfile/>` ถูก render ครั้งแรกแล้ว

## Lab-3 : Abort fetch

### objective

- ทำการยกเลิกการเรียก API ได้ เมื่อ component ตาย (unmount)

### pre-setup

- ใช้ code จากข้อก่อนหน้าที่สามารถ Fetch User ได้แล้ว

### task

- task-1 : ให้ทำการ delay การ fetch ไป 10 วินาทีเมื่อมีการ render `<UserProfile/>`
- task-2 : ระหว่างนั้นให้ทำการกดปุ่มของ `<App/>` เพื่อให้ component `<UserProfile/>` หายไป
- task-3 : ให้เขียนโค้ดสำหรับยกเลิกการ fetch ที่ delay ไว้ 10 วินาทีเมื่อ component `<UserProfile/>` หายไป

## Lab-4 : Dynamic fetch by state

### objective

- สามารถทำการ dynamic fetch ข้อมูลจากข้อมูล state ที่เปลี่ยนไปได้
- เข้าใจวิธีการ clean up Effect
- เข้าใจวิธีการ handle การเรียก API หลายครั้ง

### pre-setup

- ฟังก์ชันคอมโพเนนต์ `<UserProfile/>` สำหรับแสดงผลข้อมูล user
- มีปุ่มเพิ่ม userId ให้

```jsx
// src/components/UserProfile
import { useState } from 'react';
export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);

  // write you code for fetchUser from Id
  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
      <button onClick={() => setUserId((p) => p + 1)}>next person</button>
    </div>
  );
}
```

- ฟังก์ชันคอมโพเนนต์ `<App/>` สำหรับแสดงผล `<UserProfile>`

```jsx
// App.jsx
import { useState } from 'react';
import UserProfile from './components/UserProfile';

export default function App() {
  return (
    <main>
      <UserProfile />
    </main>
  );
}
```

### task

- เมื่อทำการกดปุ่ม next person ให้ทำการ fetch ข้อมูล user เป็น userId ถัดไป
- ทำการ Delay การ fetch ไว้ 3 วินาที โดยให้ยิง api แค่ครั้งสุดท้ายครั้งเดียว
- challenge : เมื่อ User กดยิง API รัวๆ ให้ทำการ ยิง API ทุกครั้งแล้ว render เฉพาะข้อมูลครั้งสุดท้ายเท่านั้น

## Lab-5 : Controlled Props

### objective

- สามารถทำการ dynamic fetch ข้อมูลจากข้อมูล state จาก Parent ที่เปลี่ยนไปได้
- เข้าใจวิธีการ clean up Effect
- เข้าใจวิธีการ handle การเรียก API หลายครั้ง

### pre-setup

- ฟังก์ชันคอมโพเนนต์ `<UserProfile/>` จะรับ prop เป็น userId จาก `<App/>`
- นำ Props ที่ได้มาดึงข้อมูลจาก APIs `https://jsonplaceholder.typicode.com/users/:userId`

```jsx
// src/components/UserProfile
import { useState } from 'react';
export default function UserProfile(props) {
  const [user, setUser] = useState(null);

  // write you code for fetchUser from Id
  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
}
```

- ฟังก์ชันคอมโพเนนต์ `<App/>` สำหรับแสดงผล `<UserProfile>`
- มีการส่ง Props ที่ชื่อว่า userId ให้
- เมื่อกดปุ่ม next person จะทำการอัพเดท state userId เพิ่มขึ้นทีละ 1

```jsx
// App.jsx
import { useState } from 'react';
import UserProfile from './components/UserProfile';

export default function App() {
  const [userId, setUserId] = useState(1);
  return (
    <main>
      <UserProfile userId={userId} />
      <button onClick={() => setUserId((p) => p + 1)}>next person</button>
    </main>
  );
}
```

### task

- เมื่อทำการกดปุ่ม next person ให้ทำการ fetch ข้อมูล user เป็น userId ถัดไป
- ทำการ Delay การ fetch ไว้ 3 วินาที โดยให้ยิง api แค่ครั้งสุดท้ายครั้งเดียว
- challenge : เมื่อ User กดยิง API รัวๆ ให้ทำการ ยิง API ทุกครั้งแล้ว render เฉพาะข้อมูลครั้งสุดท้ายเท่านั้น

## Lab-6 : Debouncing Search

### objective

- objective-1
- objective-2

### pre-setup

- ฟังก์ชันคอมโพเนนท์ `<DebouncingSearch/>` มี 2 state
  - searchTerm สำหรับเก็บข้อมูลที่ user พิมพ์ค้นหา
  - searchResult สำหรับเก็บข้อมูลที่ใช้ค้นหา (เป็น array)

```jsx
import React, { useState, useEffect } from 'react';

const mockData = ['Result 1', 'Result 2', 'Result 3'];

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(mockData);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Debounced Search</h2>
      <input type='text' placeholder='Search...' value={searchTerm} onChange={handleInputChange} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
```

### task

- ให้เขียน function สำหรับค้นหาข้อมูลจากข้อความที่ user พิมพ์ (partial match , case-insensitive)
- โดยทุกครั้งที่ user พิมพ์ให้ค้นหา 1 ครั้ง
- ทำการชะลอการค้นหา 3 วินาที

# Lab LIST

- [FINAL-G1] : Basic Usage

  - counter app with input [[EXAMPLE]]
  - render App ✅
  - render จุ๊มเหม่ง ✅
  - ให้อาหาร จุ๊มเหม่ง ✅
  - realtime validation ✅
  - userProfile ✅

- [FINAL-G2] : Fetch Data & CleanUp

  - teach Fetch Todo [[EXAMPLE]]
  - fetch by user click ✅
  - fetch when mounted ✅
  - abort fetch (unmounted) ✅
  - fecth user when updatedId by state ✅
  - fecth user when updatedId by props ✅
  - debouncing search ✅
  - carousel

- [Final-G3] : Auth, LocalStorage

  - userLogin and RenderUserProfle and Logout [[EXAMPLE]]
  - userLogin and RenderUserProfle แบบยิง API

- [Final-G4] : Custom Hook

  - custom hook : fetchTodo [EXAMPLE]
  - custom hook : fetchAllUser
  - custom hook : fetchUserById
  - custom hook : fetchGeneral

- Window Size Group & Ref

  - [[EXAMPLE]] window resize
  - [[EXAMPLE]] map.widget
  - infiniteScroll

- Workshop Group
  - fetch comment with post_id
  - country : list,flag,weather,map (workshop)
  - todolist : (workshop)

# TEMPLATE Lab

## TEMPLATE Lab :

### objective

- objective-1
- objective-2

### pre-setup

- setup-1
- setup-2

### task

- task-1
- task-2
