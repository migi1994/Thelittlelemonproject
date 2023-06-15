import React from 'react'

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
        <li ><a href ="/Homepage"style={navigation_li}>HOME</a></li>
        <li><a href ="/CalltoAction" style={navigation_li}>CalltoAction</a></li>
        <li ><a href ="/Specials"style={navigation_li}>Specials</a></li>
        <li ><a href ="#reservation"style={navigation_li}>RESERVATION</a></li>
        <li ><a href ="#order online"style={navigation_li}>ORDER ONLINE</a></li>
        <li ><a href ="#login"style={navigation_li}>LOGIN</a></li>

      </ul>
    </>
  )
}
export default Nav