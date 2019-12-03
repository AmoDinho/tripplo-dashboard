import React, { useState } from 'react';
import styled from 'styled-components'
import SideNav from './components/navigation/SideNav'
import TopNav from './components/navigation/TopNav'

function App() {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr ;
  grid-template-areas:
  "sidenav header"
  "sidenav main"
  
height: 100vh;


  `



  return (
    <div className="App">

      <GridStyles>


        <SideNav isOpen={isOpen} />




        <TopNav onClick={toggle} />



      </GridStyles>







    </div>
  );
}

export default App;
