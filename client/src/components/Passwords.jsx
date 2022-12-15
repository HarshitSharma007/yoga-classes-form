import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from "axios"
import Li from './Li'
function Passwords() {
  const [passwordList,setPasswordList]=useState([])
  
  const getpasswordlist= async()=>{
    const res=await axios.get('http://localhost:8000/allpasswords');
    setPasswordList(res.data);
    console.log(res.data);
    
    
  }
  
  useEffect(()=>{
  getpasswordlist();
  },[])
    
  

  
  return (<>
    
    <div className="passwordlist">
    <h1 style={{color : "white",backgroundColor: "rgb(62, 62, 67)", padding :"10px",border: "5px solid black",borderRadius :"10px",textAlign:"center"}}>These are the registered participants for yoga classes</h1>
    {
      <ul>
     {
    passwordList.map((elem,index)=>{
   return <Li  elem={elem} />;
      })}</ul>}
      </div>
      </>
  )
}

export default Passwords