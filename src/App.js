import React, { useState } from 'react';
import './assets/App.css';
import Categories from './Categories';
import Menu from './Menu';

export  const CurrentCategoryValue = React.createContext() ;
export  const CurrentCategorySet = React.createContext() ;

function App() {
  const [currentCategory , setCurrent] = useState();
  return (
    <main className="App">
      <div className="top-title">
        <h2>Our Menu</h2>
      </div>
      <section className="menu-container">
        <CurrentCategoryValue.Provider value={currentCategory}>
          <CurrentCategorySet.Provider value={setCurrent}>
            <Categories/>
            <Menu/>
          </CurrentCategorySet.Provider>
        </CurrentCategoryValue.Provider>
      </section>
    </main>
  );
}

export default App;
