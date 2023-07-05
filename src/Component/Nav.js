import React from 'react'
import { Link } from 'react-router-dom'

 function Nav() {
  
     const  navigation ={
         display:"flex",
       
         justifyContent:"end",
        listStyle:"none",
        marginTop:"2rem",
      
     
         
          
     }
  const navigation_li={
      
       marginRight:"50px", 
       fontSize:"15px",
       color:"black",
       textDecoration:"none",
       fontFamily:"Caladea", 
      

       
  }

  return (
    <>
      <ul   style = {navigation}>
      
        <li >
          <Link to="/"style={navigation_li}>HOME</Link></li>
        
        <li >
          <Link to=""style={navigation_li}>ABOUT</Link></li>
       
        <li  >
          <Link to ="/menu"style={navigation_li}>  MENU  </Link>   </li>
        
        
       
        <li >
          <Link to ="/bookingpage" style={navigation_li}>RESERVATION</Link></li>
        <li   >
          
         <Link to="/Order Online"style={navigation_li}> ORDER ONLINE</Link></li>
        <li  >
          <Link to ="/logo"style={navigation_li}>LOGIN</Link></li>

      </ul>
    </>
  )
}
export default Nav