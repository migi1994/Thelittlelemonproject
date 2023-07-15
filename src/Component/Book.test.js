import { fireEvent, getByLabelText, getByText, render, screen } from "@testing-library/react";

// import { initializeTimes,updateTimes } from './Component/Main';
import BookForm from "./BookForm";
import { MemoryRouter } from "react-router-dom";

test('Renders the BookForm heading', () => { 

   const dispatch=jest.fn()
    render(
     <MemoryRouter>
    <BookForm  dispatch={dispatch} />
</MemoryRouter>
     )
  
   ;
    const headingElement = screen.queryByText('RESERVE YOUR TABLE');
    expect(headingElement).toBeInTheDocument();



    
    
    const ButtonElement = screen.getByRole('button' , {name :"Make Your reservation"});
    fireEvent.click(ButtonElement);
    expect(screen.getByText(  "Make Your reservation")).toBeInTheDocument();
    
 


         const dateInput = screen.getByLabelText('Choose date');

         const timeSelect = screen.getByLabelText('Select time');

         const guestsInput = screen.getByLabelText('Number of guests');
         fireEvent.change(guestsInput ,{target : {value : "0"}})
    
      
        
        
         const submitButton = screen.getByRole("button")

         const occasionSelect = screen.getByLabelText('Occasion');
      
        
        
        
         expect (dateInput).toBeInTheDocument()
         expect (timeSelect).toBeInTheDocument()
         expect (guestsInput).toBeInTheDocument()
         expect (occasionSelect).toBeInTheDocument()
        expect (submitButton).toHaveAttribute("disabled")
    
       

        
       

  })




