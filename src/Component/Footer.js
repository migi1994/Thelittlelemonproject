import React from 'react'
import restaurantfood from './images/restauranfood.jpg'
     function Footer() {
//         const footer_container={
//              display:"flex",
//              justifyContent:"center",
//             height:"20rem",
//             backgroundColor:"#D9D9D9",
            
           
//         }
//         const footerimg ={
//           position:"absolute",
//            height:"230px",
//             marginRight:"42rem",
//             marginTop:"4rem",
//             borderRadius:"20px"
        
//      }
//             const navheader={
//                position:"absolute",
//                  marginTop:"6rem",
//                  marginRight:"18rem",
//                  fontFamily:"Caladea",
//             }
//     const footerNav ={
//          position:"absolute",
//           listStyle:"none",
//           marginTop:"8rem",
//           marginRight:"18rem",
//           fontFamily:"Caladea",
          
       
//     }
//     const footerli ={
//   color:"black",
//        listStyle:"none",
//        textDecoration:"none",
       
    
//  }
//     const footerContact ={
//       position:"absolute",
//       listStyle:"none",
//       marginTop:"7.5rem",
//       marginRight:"-12rem",
//       fontFamily:"Caladea",
     
    
//  }
//  const footerContactli={
//   color:"black",
//        listStyle:"none",
//        textDecoration:"none",
       
//  }
//  const footerSocials ={
//   position:"absolute",
//   listStyle:"none",
//   marginTop:"7.5rem",
//   marginRight:"-38rem",
//   fontFamily:"Caladea",

// }

//    const footerSocialsheader={
//             marginLeft:"8rem",
//              marginTop:"5.5rem",
//              fontFamily:"Caladea",
//    }
//      const footerContactheader={
//       marginLeft:"28rem",
//       marginTop:"5.5rem",
//       fontFamily:"Caladea",
//      }

// const footerSocialsli={
//   color:"black",
//   listStyle:"none",
//   textDecoration:"none"
// } 

// ////////////////////

//   return (
//     <>
//       <div style={footer_container}>
//            <img src={restaurantfood} style={footerimg}/>
//             <h4 style = {navheader}>navigation</h4>
//            <ul   style = {footerNav}>
//         <li ><a href ="/"style = {footerli}>HOME</a></li>
//         <li><a href ="/abut" style = {footerli}>ABOUT</a></li>
//         <li ><a href ="/Specials"style = {footerli}>MENU</a></li>
//         <li ><a href ="/CustomerSay"style = {footerli}>RESERVATION</a></li>
//         <li ><a href ="#order online"style = {footerli}>ORDER ONLINE</a></li>
//         <li ><a href ="#login"style = {footerli}>LOGIN</a></li>

//       </ul>
//           <h4 style={footerContactheader}>Contact</h4>
//           <ul style={footerContact} >
//           <li style={footerContactli}>Address</li>
//           <li style={footerContactli}>Phone number</li>
//           <li style={footerContactli}>Email</li>
// </ul>

//           <h4 style={footerSocialsheader}>Social Media Links</h4>
//           <ul style={footerSocials} >
//           <li style={footerSocialsli}>Facebook</li>
//           <li style={footerSocialsli}>Instagram</li>
//           <li style={footerSocialsli}>twitter</li>
// </ul>
//       </div>
    
//     </>
//   )



return (
  <>
    <div className=' pt-5'  id="footer-bg" >
        <div className='row'>
         <div className='col-md-6 d-flex '>
         <img src={restaurantfood} className='  rounded-5' id="restaurantfood" width={300} />
          <h4 className='position-relative' style={{left:"105px"}} >navigation</h4>
         <ul className='pt-5  list-unstyled'>
      <li ><a href ="/" className=''>HOME</a></li>
      <li><a href ="/abut" >ABOUT</a></li>
      <li ><a href ="/Specials">MENU</a></li>
      <li ><a href ="/CustomerSay">RESERVATION</a></li>
      <li ><a href ="#order online">ORDER ONLINE</a></li>
      <li ><a href ="#login">LOGIN</a></li>

    </ul>
        <h4  className='position-relative' style={{left:"70px"}} >Contact</h4>
        <ul  className='pt-5 list-unstyled' >
        <li >Address</li>
        <li >Phone number</li>
        <li >Email</li>
</ul>

        <h4  className='position-relative   '  style={{left:"55px"}} > Links</h4>
        <ul  className='pt-5  list-unstyled' >
        <li className='text-decoration-none'>Facebook</li>
        <li >Instagram</li>
        <li >twitter</li>
</ul>
    </div>
  </div>
  </div>
  </>
)



}

export default Footer;