
import BookForm from './BookForm'
import { useState } from 'react'

import ConfirmedBooking from './confirmedBooking';
import React from 'react'
import { Routes,Route } from 'react-router-dom';

function BookingPage(props) {
     
  
  return (
      
   
    <div> 
        
         
       
         
   
         <BookForm navigate={props.navigate}
         avilableTimes={props.avilableTimes}                          
         updateTimes={props.updateTimes}
         initializeTimes={props.initializeTimes}
         dispatch={props.dispatch} />
       
    <Routes>
         <Route path='confirmedBooking' element={<ConfirmedBooking/>}/>

    </Routes>
       
       
        </div>


   
  )

}

export default BookingPage



