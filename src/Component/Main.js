import React from 'react'
 import restauranfood from './images/restauranfood.jpg'
 function Main() {
     const main={ 
         display:"flex",
          flexDirection:"column",
         //   marginTop:"4rem",
           height:"29rem",
           backgroundColor:"#495E57"
     }
       const image={
          
              marginTop:"-17rem",
              marginLeft:"52rem",
           width:"348px",
           height:"404px",
         
      
           borderRadius:"30px",

       }
           const littlelemontext={
             
          
                  fontFamily:"Markazi Text",
                  fontWeight:"Medium",
                  fontSize:"64px",
                  color:"#F8C307",
                  marginLeft:"13rem", 
                 
                  
           }
           const Chicagotext={
                
             position:"absolute",
              top:"8rem",
               left:"13rem",
             fontFamily:"Markazi Text",
             fontWeight:"Medium",
             fontSize:"40px",
             color:"white",
           
           
             
            
            
       }
       const  mainparagraph={
        marginLeft:"13rem",
        color:"white",
      
       }

         const  mainbutton={
                 padding : ".5rem  0 .5rem 0",
                 width:"214px",
                 height:"68px",
                borderRadius:"7px",
                border:"none",
                backgroundColor:"#FBC307",
                marginLeft:"13rem",
                textAlign:"center",
                marginTop:"2rem"
             
         }


              
  return (
    <div style={main}>
      
       <h2 style={littlelemontext} >Little Lemon</h2>
       <h5 style={Chicagotext}>Chicago</h5>
       <p style={mainparagraph}>Lorem ipsum dolor sit amet, consectetur <br/>
        adipiscing elit, sed do eiusmod tempor incididunt<br/>
         ut labore et dolore magna aliqua. Ut enim ad minim <br/>
         veniam, quis nostrud exercitation ullamco laboris nisi<br/>
          ut aliquip ex ea commodo consequat. Duis aute irure dolor<br/>
             </p>

      <span style={mainbutton}>Reserve a Table </span> 
       <img src={restauranfood} style={image} alt="food"/>
    </div>
  )
}
export default Main