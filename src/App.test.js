import { fireEvent, render, screen } from "@testing-library/react";

import { initializeTimes,updateTimes } from './Component/Main';
import BookForm from "./Component/BookForm";

test('Renders the BookingForm heading', () => {
    render(<BookForm />


     )
  
   ;
    const headingElement = screen.queryByText('RESERVE YOUR TABLE');
    expect(headingElement).toBeInTheDocument();



    
    
       const  Date =screen.queryByText([     '11:00 AM',
       '12:30 PM',
       '1:00 PM',
       '2:30 PM',
       '3:40 PM',
       '5:00 PM',
       '5:30 PM',
       '6:30 PM',
       '7:00 PM',])
       expect(initializeTimes).toBeInTheDocument ()

  })


