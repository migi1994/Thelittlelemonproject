import { fireEvent, render, screen } from "@testing-library/react";

import { initializeTimes,updateTimes } from './Component/Main';
import BookForm from "./Component/BookForm";

test('Renders learn react link', () => { 

    render(<BookForm/>)

    const dateInput = screen.getByLabelText('Choose date');
     expect (dateInput).toBeInTheDocument()
  }
)
   ;
    // const headingElement = screen.queryByText('RESERVE YOUR TABLE');
    // expect(headingElement).toBeInTheDocument();



    
    
    // const linkElement = screen.getByRole('link' , {name :"Make Your reservation"});
    // fireEvent.click(linkElement);
    // expect(screen.getByText(  "Make Your reservation")).toBeInTheDocument();
    
   
  
    

       

//   })




