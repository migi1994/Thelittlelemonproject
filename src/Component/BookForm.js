import React from 'react'
import { useState } from 'react'
import restaurant from './images/restaurant.jpg'



function BookForm(props) {
  
    const [time  , setTime]=useState("17:00")
    const [guest  , setGuest]=useState("1")
    const [occasion  , setOccation]=useState("Birthday")


     const  submitHandler=(e)=>{
         e.preventDefault()

     }
     const  handelDateChange=(e)=>{
    
          const selectedDate=e.target.value
      props.dispatch ({type:'UpdateTime', date : selectedDate})
    
     }
  
  const formContainer={
              display:" flex",
              flexDirection:"column",
              marginTop:"20rem"
              
            
           
          
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
     border:"none",
     padding:".7rem 2.5rem ",
     backgroundColor:"#F8B025",
     borderRadius:"21px",
       marginLeft:"-1rem",
       marginTop:"3rem",
       
}
const reservetable={
  position:"absolute",
  fontFamily:"Merkazi",
 
   marginLeft:"34rem",
   marginTop:"23rem"
  
}

return (
  <>
          
   <div style={formContainer} >

   <img src={restaurant} style={formimg}/>
   <h2 style={reservetable}>RESERVE YOUR TABLE</h2>
  <form style={form} 
   onSubmit={submitHandler}>
  

 <label htmlFor="res-date"  
      
 onChange={handelDateChange}
 style={choosedate} >Choose date</label>

 

 <input style={dateinput}  type="date" id="res-date"/>
 <label htmlFor="res-time" style={choosetime}>Choose time</label>
 <select id="res-time" 
 style={timeinput}
 value={time}
 onChange={e=>setTime(e.target.value)}>
            {props.avilableTimes.map((time)=>( 
                <option  key={time}> {time}</option>
           ))} 
  
  {/* <option>{props.avilableTimes[0]}</option>  */}
  {/* <option>{props.avilableTimes}</option>  */}
  {/* <option>{props.avilableTimes[2]}</option> 
  <option>{props.avilableTimes[3]}</option> 
  <option>{props.avilableTimes[4]}</option>  */}


    {/* <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
    <option>22:00</option> */}
 </select>


 <label 
 htmlFor="guests" style={Numberguest}>Number of guests</label>
 <input 
 type="number" 
 placeholder="1" 
 min="1" max="10"
  id="guests" 
  style={Numberinput}
  value={guest}
  onChange={e=>setGuest(e.target.value)}/>
 <label htmlFor="occasion"style={Occasion}>Occasion</label>
 <select 
 id="occasion" 
 style={Occasionselect}
 value={occasion}
  onChange={e=>setOccation(e.target.value)}>
    <option>Birthday</option>
    <option>Anniversary</option>
 </select>
 <input type="submit" value="Make Your reservation" style={button}/>

  
  </form>
  </div>
  </>
)
}


export default BookForm