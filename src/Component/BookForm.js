import React, { useEffect } from 'react'
import { useState } from 'react'
import restaurant from './images/restaurant.jpg'
 import ConfirmedBooking from './confirmedBooking'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'


function BookForm(props) {
  
 
    const [date  , setDate]=useState()
    const [time  , setTime]=useState("")
    const [guests  , setGuests]=useState("")
    const [occasion  , setOccation]=useState("")
  
     const [formData , setFormData] = useState({
      date : "",
      time:"",
      guests:"",
      occasion:"",
       

   })
  

   const navigate = useNavigate()

   const isDisabled=Number(guests)< 1 
    
       
          const  submitHandler=(e)=>{
         
                e.preventDefault() 
                 const{date:value}=e.target;
               setFormData({...formData,[date]:value });
             
                navigate('/confirmedBooking',{ state:  {
                  
                   date,
                   time,
                   guests,
                   occasion
                  }
                }
                  
                  )
              }
              
               
          


//     const  submitHandler=(event)=>{
//          event.preventDefault();
//          setIput("")
//          setDate(props.updateTime)
//          console.log("submited")
      
// }

  
  const formContainer={
              display:" flex",
              flexDirection:"column",
              marginTop:"8rem"
              
            
           
          
    }
 
 
 
 
  const form={
          position:"absolute",
          width:"200px",
          lineHeight:"3.5rem",
          marginLeft:"35.5rem",
          marginTop:"29rem",
          
      
               
          

       
  }
const formimg={
       
       width:"500px",
        marginLeft:"27rem",
        paddingBottom:"59rem",
        backgroundColor:"#D9D9D9"
}
   const choosedate={
         fontFamily:"Caladea",
          fontSize:"20px",
          marginLeft:"3.2rem"
        
   }
   const dateinput={
        border:"none",
        padding:".5rem 4rem .5rem 4rem",
        marginLeft:"-1rem",
        backgroundColor:"#D9D9D9",
         borderBottom:"1px solid #858687",
         color:"#858682",
    
   }
   const choosetime={
      fontFamily:"Caladea",
       fontSize:"20px",
       marginLeft:"3.2rem"
   }

   const timeinput={
      border:"none",
      padding:".5rem 4rem .5rem 4rem",
       marginLeft:"1rem",
       backgroundColor:"#D9D9D9",
       borderBottom:"1px solid #858687",
       color:"#858682",
   }

   const Numberguest={
      fontFamily:"Caladea",
       fontSize:"20px",
       marginLeft:"2rem"
}
const Numberinput={
     
      border:"none",
      padding:".5rem 4rem .5rem 4rem",
      marginLeft:"1rem",
      backgroundColor:"#D9D9D9",
      borderBottom:"1px solid #858687",
      textAlign:"center",
      color:"#858682",
 
}

const Occasion={
  fontFamily:"Caladea",
   fontSize:"20px",
   marginLeft:"3.2rem",
   
}
const Occasionselect={
  border:"none",
  padding:".5rem 4rem .5rem 4rem",
  marginLeft:"-1rem",
  backgroundColor:"#D9D9D9",
  borderBottom:"1px solid #858687",
  textAlign:"center",
  color:"#858682",

}

const button={ 
      display:"flex",
      justifyContent:"center",
      borderColor:"#F8B025",
      padding:".7rem 1rem .7rem 1rem",
      backgroundColor:"#F8B025",
      borderRadius:"10px",
      marginLeft:"1rem",
      marginTop:"12rem",
        cursor:"pointer"
   
     
       
}

// const buttona={
  
//         textDecoration:"none",
         
//         color:"black"
// }
const reservetable={
  position:"absolute",
  fontFamily:"Merkazi",
  marginLeft:"34rem",
   marginTop:"23rem",
   overflow:"hidden",
   textOverflow:"ellipsis",
   whiteSpace:"nowrap",
  
  
}
  //  const avilablet={
     
  //        marginLeft:"-3rem",
  //        paddingTop:"1rem",
  //        border:"2px solid red",
  //        listStyle:"none",
  //        padding:"8rem 9rem",
  //        backgroundColor:"#F8B025"
  //  }
//  const  ulContainer={
//        display:"flex",
//        justifyContent:"center",
      
//  }

return (
  <>

  
{/*     
        <ul style={ulContainer}>
           <li style={avilablet}>{props.avilableTimes}</li>
  </ul>  */}
         
     <div style={formContainer} >
   <img src={restaurant} style={formimg}/>
   <h2 style={reservetable}>RESERVE YOUR TABLE</h2>


    



  



<form onSubmit={submitHandler}  style={form}>
 


 <label htmlFor="res-date" style={choosedate}  >Choose date</label>
 <input
   type="date" id="res-date"
   style={dateinput}
   onChange={e=>setDate(e.target.value)}
    required
/>
   
 

 
  <label 
  htmlFor="res-time"style={choosetime}>Select time</label>
 <select id="res-time" 

 style={timeinput}
 value={time}
 onChange={e=>setTime(e.target.value)}>
             {props.avilableTimes?.map((time)=>( 
                <option  key={time}> {time}</option>
           ))} 
  </select>


 <label 
  htmlFor="guests"
 style={Numberguest}>Number of guests</label>
 <input 
 type="number" 
 placeholder="0" 
   min="1" max="10"
  id="guests" 
  style={Numberinput}
  value={guests}
  onChange={e=>setGuests(e.target.value)}
 
  required/>
 <label 
  htmlFor="occasion"style={Occasion}>Occasion</label>
 <select 
 id="occasion" 
 style={Occasionselect}
 value={occasion}
  onChange={e=>setOccation(e.target.value)}
  required
  >  
    <option disabled></option>
    <option>Birthday</option>
    <option>Anniversary</option>
 </select> 

 




   <button style={button} type="name"  aria-label="On Click"
   onClick={(()=>props.dispatch({type:"update"}))} disabled={isDisabled}>Make Your reservation</button>


  {/* <span  type="submit" 
 style={button}><a value="submit" href='#' 
 style={buttona} 
 onClick={(()=>props.dispatch({type:"update"}))}  >Make Your reservation</a> </span> */} 

  
  </form> 
  </div>


  <Routes>
         <Route path='confirmedBooking' element={<ConfirmedBooking/>}/>

    </Routes>


  </> 
)
}


export default BookForm