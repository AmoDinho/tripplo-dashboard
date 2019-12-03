import React, { useState } from 'react';
import styled from 'styled-components'
import SideNav from './components/navigation/SideNav'
import TopNav from './components/navigation/TopNav'
import FleetIndex from './components/fleet/FleetIndex'
function App() {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 50px 1fr ;
 
  
height: 100vh;


  `



  return (
    <div className="App">

      <GridStyles>


        <SideNav isOpen={isOpen} />




        <TopNav onClick={toggle} />
        <FleetIndex />


      </GridStyles>







    </div>
  );
}

export default App;
