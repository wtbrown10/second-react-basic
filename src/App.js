import React from 'react';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import ListContextProvider from './Context/ListContext';

function App() {
  return (
    <div>
      <ListContextProvider>
      <NavBar />
     <Body />
      </ListContextProvider>
    
    </div>
  );
}

export default App;
