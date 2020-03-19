import React from 'react';
import './Styles/App.css';
import ContactBox from './Components/ContactBox';

function App() {
  return (
    <div className="App">
        <div className = 'placeholder-container'>
          <div className = 'placeholder'>COMING SOON</div>
          <ContactBox />
        </div>
    </div>
  );
}

export default App;
