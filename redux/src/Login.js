import React, { useEffect, useState } from 'react'
import {Button,TextField} from '@mui/material';
import logo from './images/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router';


function Login() {

  const nav = useNavigate()
  const checkName = ['muthu','kumar','arul','magesh'];
  const checkPass = ['123','456','789'];
  const [userName,setUserName] = useState('')
  const [userPass,setUserPass] = useState('')
  const nameFun = (event)=>{
       setUserName(event.target.value)
  }
  const passFun = (event)=>{
    setUserPass(event.target.value)
}
const loginFun = ()=>{
   const checkUserName = checkName.includes(userName)
   const checkUserPass = checkPass.includes(userPass)
   if(checkUserName&&checkUserPass){
    nav('navbar')
   }
}
 
  return (
    <div className='login'>
      <img src={logo}></img>
      <div className='loginBox'>
      <AccountCircleIcon></AccountCircleIcon>
       <h2>Sign Up</h2>
       <div className='ip'>
      <TextField onChange={nameFun} id="ip-1" label="Enter Your Name" variant="outlined" />
      <TextField onChange={passFun}  id="ip-2" label="Enter Your PassWord" variant="outlined" /><br></br>
      <Button onClick={loginFun} variant="contained">Login</Button>
      </div>
      </div> 
    </div>
  )
}

export default Login