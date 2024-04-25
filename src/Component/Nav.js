import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/Rectangle 15.png'

 function Nav() {
  
  //    const  navigation ={
  //        display:"flex",
       
  //        justifyContent:"end",
  //       listStyle:"none",
  //       marginTop:"2rem",
      
     
         
          
  //    }
  // const navigation_li={
      
  //      marginRight:"50px", 
  //      fontSize:"15px",
  //      color:"black",
  //      textDecoration:"none",
  //      fontFamily:"Caladea", 
      

       
  // }

  

  return (
    <>
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>

      <div className='container'>
    <a href='index.html' className='navbar-brand'>

<img src={Logo}  alt="logo"/>

</a>

<button className='navbar-toggler type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#navbarNavDropdown"}'>
  <span className='navbar-toggler-icon'></span>
</button>
<div className='collapse navbar-collapse' id ={"navbarNavDropdown"}>
  <ul className='navbar-nav ms-auto gap-2'>
<li className='nav-item'>
  <a href='#' className='nav-link btn btn-outline-danger border fw-semibold px-4 mx-4 '>Home</a>
</li>
<li className='nav-item'>
  <a href='#' className='nav-link fw-semibold '>About</a>
</li>
<li className='nav-item'>
  <a href='#' className='nav-link fw-semibold'>Menu</a>
</li>
<li className='nav-item'>
  <a href='#' className='nav-link fw-semibold'>Reservation</a>
</li>
<li className='nav-item'>
  <a href='#' className='nav-link fw-semibold'>Order Online </a>
</li>
<li className='nav-item'>
  <a href='#' className='nav-link fw-semibold'>Login</a>
</li>


  </ul>
</div>
      </div>

  </nav>






      {/* <ul   style = {navigation}>
      
        <li >
          <Link to="/"style={navigation_li}>HOME</Link></li>
        
        <li >
          <Link to="about"style={navigation_li}>ABOUT</Link></li>
       
        <li  >
          <Link to ="/menu"style={navigation_li}>  MENU  </Link>   </li>
        
        
       
        <li >
          <Link to ="/bookingpage" style={navigation_li}>RESERVATION</Link></li>
        <li   >
          
         <Link to="/Order Online"style={navigation_li}> ORDER ONLINE</Link></li>
        <li  >
          <Link to ="/logo"style={navigation_li}>LOGIN</Link></li>

      </ul> */}
    </>
  )
}
export default Nav