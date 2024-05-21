import React from 'react'
import { useLocation } from 'react-router-dom'
function ConfirmedBooking(props) {
    
     const location = useLocation();
          console.log(location)
     // const confirmation_Container={
     //        display:"flex",
     //        justifyContent:"center",
     //      padding:"5rem",
     //        backgroundColor:"#4bb543",
     //        marginTop:"3rem"
       
          

     //   }
     //   const confirmation_h2={
     //       position :"absolute",
     //       marginLeft:"3rem",
     //       padding :"0 1rem 0 1rem",
     //      color:"white",
       
     //      overflow:"hidden",
     //      textOverflow:"ellipsis",
     //      whiteSpace:"nowrap",
          
     //   }
     //   const confirmation_h3={
     //          marginRight:"1rem",
     //         marginTop:"8rem",
     //        color:"white",
         
           
          
     //  }


  return (
   <div className='container-xl mt-5 ' id="confirmation">
     <div className='row shadow-lg border p-5 rounded-5' >


        <div  className='col-md-12 '  >

        <h2 className='fs-2 '> Your Booking has been Confirmed !  </h2> <br/>
              <div id='dtgo'>
               <h3 >Date : { location.state.date} ,  </h3>
                  <h3 >Time : {location.state.time}  , </h3>
                <h3 >Guests : { location.state.guests} ,  </h3>
                <h3 >Occasion : { location.state.occasion} , </h3> 
      </div>
          
</div> 
         </div>
   </div>
  )
}

export default ConfirmedBooking