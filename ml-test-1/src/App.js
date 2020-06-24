import React, { Component } from 'react';
import './App.css';
import tiger from "./image/tiger.jpeg";
import Main from "./Component/Main"
import Input from "./Component/Input"
// import bear from "./image/bear.jpg";
// Importing ml5.js as ml5
// import * as ml5 from "ml5";

function App () {
  const [img,setimg] = React.useState(tiger);
  React.useEffect(() => {
   
    // console.log(img);
    
   
  },[img]);
 

  return (
<div>
    <Input setimg={setimg}/>
    <Main img={img}/>
</div>
  );
}

export default App;
