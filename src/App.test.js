import { fireEvent, render, screen } from "@testing-library/react";

import { initializeTimes,updateTimes } from './Component/Main';
import BookForm from "./Component/BookForm";

test('Renders the BookForm heading', () => { 
   const dispatch=jest.fn()
    render(<BookForm  dispatch={dispatch}/>


     )
  
   ;
    const headingElement = screen.queryByText('RESERVE YOUR TABLE');
    expect(headingElement).toBeInTheDocument();



    
    
    const linkElement = screen.getByRole('link' , {name :"Make Your reservation"});
    fireEvent.click(linkElement);
  
    // Assert the function's behavior
    expect(screen.getByText(  "Make Your reservation")).toBeInTheDocument();
    
      
       

  })


