import Testgambar from '../components/Gambar4';
import React from "react";
// import { useState } from 'react';

function Test2() {
  // const [ test , setTest ] = useState(false)
  // console.log(test)
  
  // const onChangeHandler = (event) => {
  //   setTest(!test)
  // }

  let linkarrow={
    NW:true,
    NN:true,
    NE:true,
    EE:true,
    SE:true,
    SS:true,
    SW:true,
    WW:true,
  }

  return (
    <div>
      <Testgambar linkarrow={linkarrow}/>
      {/* <input type="checkbox" onChange={onChangeHandler}/> Ayam */}
      {/* {console.log(Object.values(linkarrows).reduce((a, linkarrow) => a + linkarrow, 0))} */}
    </div>
  );
}

export default Test2;
