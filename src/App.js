import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('you changed the counter to ' + count);
  }, [count]);

  const updateCount = (amount) => {
    setCount((prevCount) => prevCount + amount);
  };

  return (
    <div className="App">
      <button onClick={() => updateCount(1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => updateCount(-1)}>-</button>
    </div>
  );
}

export default App;
