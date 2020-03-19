import React from 'react';
import './Styles/App.css';
import SideNavbar from './Components/SideNavbar';
import PortfolioItems from './Components/PortfolioItems';

function App() {
  return (
    <div className="App">
        <PortfolioItems/>
        <SideNavbar/>
    </div>
  );
}

export default App;
