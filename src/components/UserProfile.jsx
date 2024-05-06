import { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('Effect Run');
    // // Declare
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log('fetch Success');
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    // Execute
    const id = setTimeout(() => {
      fetchUser();
    }, 10 * 1000);

    // Run Before Component die
    return () => {
      console.log('Abort Fetch');
      clearTimeout(id);
    };
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
