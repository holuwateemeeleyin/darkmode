import React, { useState } from 'react'
import Switch from 'react-switch'
import './App.css';

function App() {
  const [darkmode, setDarkmode] = useState(false)
  const [isDark, SetIsDark] = useState(false)
  
  const onChangeSwitch = action => {
    SetIsDark(action)
  }

  console.log(isDark);
  return (
    <div className="App">
      <div className='app-container'>
        <div className={darkmode ? 'dark-mode': 'light-mode'}>
          <input type='checkbox'
            onChange={() => setDarkmode(!darkmode)}
          />
          <span className={darkmode ? 'dark-mode': 'light-mode'}>it is in {darkmode ? 'dark' : 'light'} mode</span>
        </div>

        {/* Or Using A library called react-switch */}
        <div className={isDark ? 'dark-mode' : 'light-mode'}>
          <Switch
            checked={isDark}
            onChange={onChangeSwitch}
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={30}
          />
          <span> It is {isDark ? 'dark': 'light'} mode</span>
        </div>
      </div>
    </div>
  );
}

export default App;
