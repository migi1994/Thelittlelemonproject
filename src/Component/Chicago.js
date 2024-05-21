import React from 'react'
import MarioandAdrianA from './images/Mario and Adrian A.jpg'
import restaurantchefB from './images/restaurant chef B.jpg'
function Chicago() {
   
  //    const  chicago_container={
          
  //         display:"flex",
  //         justifyContent:"center",
  //         height:"30rem",
  //         backgroundColor:"#CBC5C5",
          

  //    }
  //   const Chicagoh2 ={
  //         position:"absolute",
  //         marginRight:"34rem",
  //         marginTop:"7rem",
  //         fontFamily:"Caladea" ,
  //         fontSize:"56px",
  //         overflow:"hidden",
  //         textOverflow:"ellipsis",
  //         whiteSpace:"nowrap",
  //   }
  //   const Chicagoh5 ={
  //       position:"absolute",
  //       marginRight:"44rem",
  //       marginTop:"11rem",
  //       fontFamily:"Caladea",
  //       fontSize:"44px",
  //       overflow:"hidden",
  //       textOverflow:"ellipsis",
  //       whiteSpace:"nowrap",
        
      
  //   }
  //   const ChicagoP ={
  //       position:"absolute"  ,
  //         marginRight:"39rem",
  //         marginTop:"16rem",
  //         fontFamily:"Caladea",
  //         overflow:"hidden",
  //         textOverflow:"ellipsis",
  //         whiteSpace:"nowrap",
  //   }
  //   const ChicagoimgA ={
  //       position:"absolute",
  //         width:"320px",
  //         height:"220px",
  //         marginTop:"15rem",
  //         marginLeft:"23rem"
  //   }
  //   const ChicagoimgB ={
  //       position:"absolute",
  //       width:"320px",
  //       height:"220px",
  //       marginTop:"8rem",
  //       marginLeft:"47rem"
  //   }


  // return (
  //   <>
  //     <div style={chicago_container}>

   
  //    <h2 style={Chicagoh2}>Little Lemon</h2>
  //    <h5 style={Chicagoh5}>Chicago</h5>
  //    <p style={ChicagoP}>Lorem ipsum dolor sit amet,<br/>
  //       consectetur adipiscing elit,<br/>
  //       sed do eiusmod tempor incididunt<br/>
  //       consectetur adipiscing elit,<br/>
  //       sed do eiusmod tempor incididunt<br/>
  //       </p>
  //    <img src={MarioandAdrianA} style={ChicagoimgA}/>
  //    <img src={restaurantchefB} style={ChicagoimgB}/> 
  //      </div>
  //   </>
  // )





  return (
    <>
      <div className='    pt-5 pb-5 ' id="chicago-bg"  style={{width:"auto"}}>
        <div className='row'>
          <div className='col-md-6  ps-5 '>
     <h2 className='display-1' >Little Lemon</h2>
     <h5 className='text-danger position-relative ' style={{bottom:"20px"}}>Chicago</h5>
     <p >Lorem ipsum dolor sit amet,<br/>
        consectetur adipiscing elit,<br/>
        sed do eiusmod tempor incididunt<br/>
        consectetur adipiscing elit,<br/>
        sed do eiusmod tempor incididunt<br/>
        </p>
</div>  
   <div className='col-md-6   d-flex  ' >
     <img src={MarioandAdrianA} className='mt-5 position-relative rounded-3 shadow-lg  '  id="first_image" style={{top:"42px" , right:"32px", opacity:"40%"}} width={309} />
     <img src={restaurantchefB}   className="position-relative rounded-3 shadow-lg " id="second_image"  style={{right:"292px" ,top:"93px" ,opacity:"60%"}} width={300} height={200} /> 
     <img src={restaurantchefB}   className="position-relative rounded-3 shadow-lg " id="second_image"  style={{right:"542px" ,top:"63px"}} width={300} height={200} /> 
     
       </div>
       </div>
        </div>
    </>
  )


}

export default Chicago