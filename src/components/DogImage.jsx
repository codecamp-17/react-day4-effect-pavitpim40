import { useEffect } from 'react';

const src =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

function DogImage() {
  // FN-BODY (ยกเว้น useEffect, 1st Run)
  useEffect(() => {
    // Execute Effect (3rd run)
    alert('Hi จุ๊มเหม่ง');

    return () => {
      // Clean Up Effect (4th run)
      alert('Goodbye from จุ๊มเหม่ง');
    };
  }, []);

  // Render (2nd Run)
  return <img src={src} />;
}

export default DogImage;
