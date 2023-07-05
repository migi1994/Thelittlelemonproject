import React from 'react'

function confirmedBooking(props) {
 
       const confirmation_Container={
            display:"flex",
            justifyContent:"center",
            padding:"5rem",
            backgroundColor:"#4bb543",
            marginTop:"3rem"

       }
       const confirmation_h2={
           color:"white"
       }

  return (
   <> 


        <div style={confirmation_Container} >

        <h2 style={confirmation_h2}> Booking Confirmed !  </h2> 
    
      
          

         </div>
   </>
  )
}

export default confirmedBooking