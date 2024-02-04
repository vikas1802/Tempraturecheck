import React, { useState } from 'react';
import "./temprature.css";
import mobile from "./Assest/mobile.png";
 

const Temprature = () => {
  const[temp, setTemp] = useState(12);
  const[color, setColor] = useState("#34495e");
  const[line, setLine] = useState("normal")


    const handleplus = () => {
    setTemp((temp)=>{
      const newtemp =  temp+1;
      if(newtemp>=19){
        setColor("red");
        setLine("Hot")
      }
      return newtemp;
    });
  }
  const handleminus = () => {
    setTemp(temp-1);
    if(temp<=12){
      setColor("blue")
      setLine("Cold")
    }
  }
  return (
    <div className='temp'>
    <div className='temp-image'>
    <img src={mobile} alt="mobile" style={{width:"100%"}} />
    </div>
    <div className='temp-display'>
      <div className='actual-temp'style={{backgroundColor: color}}>
      {temp}°C {line}</div>
      <div></div>
      <div className='temp-btn'>
        <button onClick={handleplus}>+</button>
        <button onClick={handleminus}>-</button>
      </div>
    </div>
    </div>
    
  )
}

export default Temprature
