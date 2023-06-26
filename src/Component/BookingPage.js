
import BookForm from './BookForm'
import { useState } from 'react'


import React from 'react'

function BookingPage(props) {
  
  return (
      
   
    <div> 
        
         
        
        
         <BookForm 
         avilableTimes={props.avilableTimes}
         setAvilableTimes={props.setAvilableTimes}
         /></div>
  )
}

export default BookingPage