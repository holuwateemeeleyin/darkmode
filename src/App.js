import React, { useState } from 'react'
import './App.css';

function App() {
  const [darkmode, setDarkmode] = useState(false)
  console.log(darkmode);
  return (
    <div className="App">
      <div className='app-container'>
        <div className={darkmode ? 'dark-mode': 'light-mode'}>
          <input type='checkbox'
            onChange={() => setDarkmode(!darkmode)}
          />
          <span className={darkmode ? 'dark-mode': 'light-mode'}>it is in {darkmode ? 'dark' : 'light'} mode</span>
        </div>
      </div>
    </div>
  );
}

export default App;
