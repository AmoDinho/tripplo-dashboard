import React from 'react';
import styled from 'styled-components'
import SideNav from './components/navigation/SideNav'
import TopNav from './components/navigation/TopNav'

function App() {

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


        <SideNav />




        <TopNav />



      </GridStyles>







    </div>
  );
}

export default App;
