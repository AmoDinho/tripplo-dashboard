import React, { useState } from 'react';
import SideNav from './components/navigation/SideNav'
import TopNav from './components/navigation/TopNav'
import FleetIndex from './components/fleet/FleetIndex'
import './styles/App.css'


function App() {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
  }





  return (
    <div className="App">

      <div className="header">
        <TopNav onClick={window.innerWidth >= 1280 ? null : toggle} />
      </div>


      <div className="sidenav">
        <SideNav isOpen={isOpen} />
      </div>





      <div className="main">
        <FleetIndex />
      </div>











    </div>
  );
}

export default App;
