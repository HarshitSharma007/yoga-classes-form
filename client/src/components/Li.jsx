import React,{useState} from 'react'


function Li({elem}) {
    const [ show,setShow]=useState('eye-icon')
    console.log(elem);
  return (
    <li key={elem._id} >{elem.email  + "  month : " + elem.month+ "  batch : " +elem.batch  } </li>
  )
}

export default Li