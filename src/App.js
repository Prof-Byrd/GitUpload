import React, { useState } from 'react';
import './App.css';
import Button from './Button';
function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Github Upload</h1>
      <h1>Counter: {count}</h1>
      <Button label="Increment" onClick={handleIncrement} />
      <Button label="Decrement" onClick={handleDecrement} />
      <Button label="Reset" onClick={handleReset} />
    </div>
  );
}
export default App;
/*
import logo from './logo.svg';
import './App.css';

function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
}
export default function Gallery() {
  return (
  <section>
    <h1>Amazing scientists</h1>
    <Profile />
    <Profile />
    <Profile />
  </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;
*/