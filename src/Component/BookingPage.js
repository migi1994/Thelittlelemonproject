
import BookForm from './BookForm'
import { useState , } from 'react'

import ConfirmedBooking from './confirmedBooking';
import React from 'react'
import { Routes,Route, MemoryRouter,  } from 'react-router-dom';
import Main from './Main';


function BookingPage(props) {
     
  
  return (
      
   
    <div className='container-xl ' id="new-cont" > 
       <div className='row ' >
        <div className='col-12 d-flex justify-content-center position-relative ' style={{top:"44rem"}}>
    

    
   
 
         <BookForm navigate={props.navigate}
         avilableTimes={props.avilableTimes}                          
         updateTimes={props.updateTimes}
         initializeTimes={props.initializeTimes}
         dispatch={props.dispatch} />
   
   
      </div>
 
      </div> 
       
        </div>


   
  )

}

export default BookingPage



