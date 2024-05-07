
import './App.css';
import { useState } from 'react';
 import Header from './Component/Header';
 import Nav from './Component/Nav';
 import Main from './Component/Main';
 import Footer from './Component/Footer';
 import Specials from './Component/Specials';
 import CustomerSay from './Component/CustomerSay';
 import Chicago from './Component/Chicago';
import { Routes, Route } from 'react-router-dom';

import Homepage from './Component/Homepage';

 function App() {
 


  return (
    <>  
   
           <Nav />
           <Header/>
             <Main/> 
            <Routes>
            <Route path="/" element={<Homepage />} />
       <Route path="menu" element={ <Specials/> } />
       <Route path="/customerSay" element={ <CustomerSay/>} />  
       <Route path="about" element={<Chicago/>} />
      
            </Routes>



       
       
 
    



    </>
  );
}

export default App;
