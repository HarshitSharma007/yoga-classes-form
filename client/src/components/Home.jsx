import React from 'react'
import {useState} from 'react'
import axios from "axios"
function Home() {
  const [password,setpassword]=useState("")
  const [email,setEmail]=useState("")
  const [age,setAge]=useState("")
  const [batch,setBatch]=useState("6-7AM")
  const [name,setName]=useState("")
  const [month,setMonth]=useState("january")
  const submit= async()=>{
    console.log(password);
    console.log(email);
   try{await axios.post('http://localhost:8000/push',{
      password:password,
      email:email,
      age:age,
      name:name,
      batch:batch,
      month:month
    })

    setpassword("")
    setAge("")
    setName("")
    setMonth("january")
    setBatch("6-7AM")
    setEmail("")
  alert("CompletePayment() has been called. You have been enrolled")}catch(e){
      
      alert(e.response.data.data)
      
    }
      }
  return (
    <div className ="container">
    <label htmlFor="title"  >
        Type Your Email
      </label>
      <input  type="text" value={email} id="title" onChange={(e)=>{
        setEmail(e.target.value)
      }}>
      </input>
      <label htmlFor="password">
        Type Your Password
      </label>
      <input type="password"  value={password} id="password" onChange={(e)=>{
        setpassword(e.target.value)
        
      }}>
      </input>
      <label htmlFor="age">
        Type Your Age (18-57)
      </label>
      <input type="number" min="18" max="5" value={age} id="age"  onChange={(e)=>{
        setAge(e.target.value)
        
      }}>
      </input>
      <label htmlFor="month">
        Select Your Month
      </label>
      <select name="month" id ="month" required onChange={(e)=>{
        setMonth(e.target.value)}}>
        <option>january</option>
        <option>february</option>
        <option>march</option>
        <option>april</option>
        <option>may</option>
        <option>june</option>
        <option>july</option>
        <option>august</option>
        <option>september</option>
        <option>october</option>
        <option>november</option>
        <option>december</option>
    </select>
      <label htmlFor="batch">
        Select your batch
      </label>
      
      <select name="batch" id ="batch" required onChange={(e)=>{
        setBatch(e.target.value)}}>
        <option>6-7AM</option>
        <option>7-8AM</option>
        <option>8-9AM</option>
        <option>5-6PM</option>
    </select>
      <label htmlFor="name">
        Type Your Name
      </label>
      <input type="name"  value={name} id="batch" onChange={(e)=>{
        setName(e.target.value)
        
      }}>
      </input>
      <input type="submit"  value="Pay Fee" className="submit" onClick={submit}>

      </input>
      
    </div>
  );
}

export default Home