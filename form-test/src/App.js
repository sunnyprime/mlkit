import React from 'react';
// import Firstform from './Pages/Firstform'
import './App.css';
import Radiopage from './Pages/Radiopage';
import Checkboxpage from './Pages/Checkboxpage';
// import Looptest from './Components/Looptest';
import Boxcheck from './Pages/Boxcheck'
import Selectdata from './Pages/Selectdata';


function App() {
  return (
    <div style={{marginLeft:'50px',marginTop:'50px'}}>
      {/* Appjs */}
      {/* <Firstform /> */}
      {/* <Looptest /> */}
      {/* <Radiopage /> */}
      {/* <Checkboxpage /> */}
      {/* <Boxcheck /> */}
      <Selectdata />

    </div>
  );
}

export default App;
