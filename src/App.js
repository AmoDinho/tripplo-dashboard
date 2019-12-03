import React from 'react';

import SideNav from './components/navigation/SideNav'
import TopNav from './components/navigation/TopNav'
function App() {
  return (
    <div className="App">


      <aside className="table-cell w-1/5 h-full mb-4 ">
        <SideNav />

      </aside>
      <main className="table-cell w-screen mb-20">
        <TopNav />
        <h1>hell</h1>
      </main>





    </div>
  );
}

export default App;
