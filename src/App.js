import React, { useState } from 'react';
import styled from 'styled-components'
import SideNav from './components/navigation/SideNav'
import TopNav from './components/navigation/TopNav'
import FleetIndex from './components/fleet/FleetIndex'
import './styles/App.css'
function App() {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas: "sidenav header"
      "sidenav main"
      "sidenav";
  
height: 100vh;


  `

  const SideNavGrid = styled.div`
  grid-area:sidenav ;
  `
  const TopNavGrid = styled.div`
  grid-area:header ;
  `
  const FleetGrid = styled.div`
  grid-area: main;
  `


  return (
    <div className="App">



      <div className="sidenav">
        <SideNav isOpen={isOpen} />
      </div>

      <div className="header">
        <TopNav onClick={toggle} />
      </div>




      <div className="main">
        <FleetIndex />
      </div>











    </div>
  );
}

export default App;
