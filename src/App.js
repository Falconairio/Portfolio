import React from 'react';
import './Styles/App.css';
import SideNavbar from './Components/SideNavbar';
import PortfolioItems from './Components/PortfolioItems';
import TopNavbar from './Components/TopNavbar';

function App() {
  return (
    <div className="App">
        <TopNavbar/>
        <PortfolioItems/>
        <SideNavbar/>
    </div>
  );
}

export default App;
