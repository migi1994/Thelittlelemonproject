import React from 'react'
import {  useReducer } from 'react'
 import restauranfood from './images/restauranfood.jpg'
 import { Routes , Route } from 'react-router-dom'
 import Homepage from './Homepage'
 import CalltoAction from './CalltoAction'
 import Specials from './Specials'
  import CustomerSay from './CustomerSay'
  import Chicago from './Chicago'
  import BookingPage from './BookingPage'
   import { fetchAPI ,submitAPI } from './Api'
   import ConfirmedBooking from './confirmedBooking'
  //  import { useNavigate } from 'react-router-dom';
  
 


    
   

 



  const reducer =(state , action)=>{
       switch(action.type){
        case "initial":
          return {initializeTimes:state.initializeTimes()};
       
         case "update":
          return {updateTimes:state.updateTimes()}
      
       default : throw  new Error();
  }
    }
  
  
  
  function updateTimes(){
 

   return [
    '12:30 PM',
     '1:00 PM',
     '2:30 PM',
     '3:40 PM',

   ]
  }

  
    // function initializeTimes(){
    //    return [  
    //    '11:00 AM',
    //    
    //    '5:00 PM',
    //    '5:30 PM',
    //    '6:30 PM',
    //    '7:00 PM',
    //   ]
         
 

   // }
   
    export const initializeTimes = () => {
      let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
      const reservedTimes = reservations.filter(reservation => reservation.update === reservation.update)
                                        .map(reservation => reservation.update);
      const availableTimes = fetchAPI(new Date());
      let updatedTimes = availableTimes.filter(date => !reservedTimes.includes(date));
      return updatedTimes;
    };
  

  function Main() {

    // const navigate = useNavigate();


      //  const submitForm =async ()=>{
         
      //      const apiResponse =  submitAPI()
      //      if (apiResponse === true){

           
          
      //  }
      //  else {
      //     console.log("error")
      //  }







      // }


     
const [avilableTimes ,dispatch]=useReducer(updateTimes, reducer ,initializeTimes)
   

  
  

  
//  const main={ 
//          display:"flex",
//           flexDirection:"column",
//          //   marginTop:"4rem",
//            height:"29rem",
//            backgroundColor:"#495E57"
//      }
//        const image={
            
//               marginTop:"-17rem",
//               marginLeft:"52rem",
              
//                width:"348px",
//                height:"404px",
         
      
//            borderRadius:"30px",

//        }
//            const littlelemontext={
             
          
//                   fontFamily:"Markazi Text",
//                   fontWeight:"Medium",
//                   fontSize:"64px",
//                   color:"#F8C307",
//                   marginLeft:"13rem", 
                 
                  
//            }
//            const Chicagotext={
                
//              position:"absolute",
//               top:"8rem",
//                left:"13rem",
//              fontFamily:"Markazi Text",
//              fontWeight:"Medium",
//              fontSize:"40px",
//              color:"white",
           
           
             
            
            
//        }
//        const  mainparagraph={
//         marginLeft:"13rem",
//         color:"white",
      
//        }

//          const  mainbutton={
//                  padding : ".5rem  0 .5rem 0",
//                  width:"214px",
//                  height:"68px",
//                 borderRadius:"7px",
//                 border:"none",
//                 backgroundColor:"#FBC307",
//                 marginLeft:"13rem",
//                 textAlign:"center",
//                 marginTop:"2rem",
//                 cursor:"Pointer",
             
             
             
//          }
//          const mainbutton_a= {
//           textDecoration:"none",
//           color:"black"
//          }
     

              
//   return (


       
//     <div style={main}>
      
//        <h2 style={littlelemontext} >Little Lemon</h2>
//        <h5 style={Chicagotext}>Chicago</h5>
//        <p style={mainparagraph}>Lorem ipsum dolor sit amet, consectetur <br/>
//         adipiscing elit, sed do eiusmod tempor incididunt<br/>
//          ut labore et dolore magna aliqua. Ut enim ad minim <br/>
//          veniam, quis nostrud exercitation ullamco laboris nisi<br/>
//           ut aliquip ex ea commodo consequat. Duis aute irure dolor<br/>
//              </p>
    
//      <button style={mainbutton}><a href='/bookingPage' style={mainbutton_a}> Reserve a Table </a></button>
//        <img src={restauranfood} style={image} alt="food"/>
    
 
          
         
         
        
     
    
//        <Routes>
     

            
      
//         <Route path='/bookingPage' element={<BookingPage  
//          avilableTimes={avilableTimes}
//          initializeTimes={initializeTimes}
//          dispatch={dispatch}   />}/>
//           <Route path="/confirmedBooking" element={<ConfirmedBooking 
            
//           />}
          
//      />
       
// </Routes>  
    
//     </div>


 ///////////////////////////////////////////////////copy///////////////////////

// const main={ 
//   display:"flex",
//    flexDirection:"column",
//   //   marginTop:"4rem",
//     height:"29rem",
//     backgroundColor:"#495E57"
// }
// const image={
     
//        marginTop:"-17rem",
//        marginLeft:"52rem",
       
//         width:"348px",
//         height:"404px",
  

//     borderRadius:"30px",

// }
//     const littlelemontext={
      
   
//            fontFamily:"Markazi Text",
//            fontWeight:"Medium",
//            fontSize:"64px",
//            color:"#F8C307",
//            marginLeft:"13rem", 
          
           
//     }
//     const Chicagotext={
         
//       position:"absolute",
//        top:"8rem",
//         left:"13rem",
//       fontFamily:"Markazi Text",
//       fontWeight:"Medium",
//       fontSize:"40px",
//       color:"white",
    
    
      
     
     
// }
// const  mainparagraph={
//  marginLeft:"13rem",
//  color:"white",

// }

//   const  mainbutton={
//           padding : ".5rem  0 .5rem 0",
//           width:"214px",
//           height:"68px",
//          borderRadius:"7px",
//          border:"none",
//          backgroundColor:"#FBC307",
//          marginLeft:"13rem",
//          textAlign:"center",
//          marginTop:"2rem",
//          cursor:"Pointer",
      
      
      
//   }
//   const mainbutton_a= {
//    textDecoration:"none",
//    color:"black"
//   }
 


       
return (

   <div className='hero '>

<div className='container-xl mt-5 d-flex  justify-content-center  ' >
 <div className='row'>
  <div className='col-md-6  position-relative   '  style={{ top: 170, }}>
<h2  className='text-warning fs-xxl' >Little Lemon</h2>
<h5 className='text-white' >Chicago</h5>
<p  className='text-white'>Lorem ipsum dolor sit amet, consectetur <br/>
 adipiscing elit, sed do eiusmod tempor incididunt<br/>
  ut labore et dolore magna aliqua. Ut enim ad minim <br/>
  veniam, quis nostrud exercitation ullamco laboris nisi<br/>
   ut aliquip ex ea commodo consequat. Duis aute irure dolor<br/>
      </p>


<button  className='btn btn-warning text-white '><a href='/bookingPage' className='text-decoration-none text-dark fw-semibold' > Reserve a Table </a></button>
</div>
  <div className='col-md-6 mt-5  pe-5'>

<img src={restauranfood}  className='rounded-5 position-relative   '  style={{ top: 70, left:20 }} width={"348px"} alt="food"/>
</div>

   </div>
  
  
 


<Routes>


     

 <Route path='/bookingPage' element={<BookingPage  
  avilableTimes={avilableTimes}
  initializeTimes={initializeTimes}
  dispatch={dispatch}   />}/>
   <Route path="/confirmedBooking" element={<ConfirmedBooking 
     
   />}
   
/>

</Routes>  

</div>
</div>

);

    
}
export default Main