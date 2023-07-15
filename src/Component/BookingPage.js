
import BookForm from './BookForm'
import { useState , } from 'react'

import ConfirmedBooking from './confirmedBooking';
import React from 'react'
import { Routes,Route, MemoryRouter,  } from 'react-router-dom';

function BookingPage(props) {
     
  
  return (
      
   
    <div> 
        
         
       
      
   
         <BookForm navigate={props.navigate}
         avilableTimes={props.avilableTimes}                          
         updateTimes={props.updateTimes}
         initializeTimes={props.initializeTimes}
         dispatch={props.dispatch} />
      
 
      
       
        </div>


   
  )

}

export default BookingPage



