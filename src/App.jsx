import React, { useEffect } from 'react';

// Function Component
export default function App() {
  // ### START -- FN BODY (Run Before Every Render)

  // ###### START USE-EFFECT (Run After Every Render)
  React.useEffect(() => {
    alert('After First Render');
  }, []);
  // ###### END USE-EFFECT

  alert('Before Render');

  // ### END -- FN BODY
  // ### START -- FN RETURN
  return <main>Hello, React</main>;
}

// FN-BODY -> Execute Code -> FN-RETURN -> Render -> Execute useEffect
