import { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // // Declare
    // const fetchUser = async () => {
    //   try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //     const data = await response.json();
    //     setUser(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // // Execute
    // fetchUser();

    // IIFE
    (async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      {user ? (
        <>
          <h1>name : {user.name}</h1>
          <h2>email : {user.email}</h2>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default UserProfile;
