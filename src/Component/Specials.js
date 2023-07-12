import React from 'react'
import card1img from './images/Rectangle 14.png'
import deliveryguy from './images/deliveryguy.png'
import greekSalad from './images/greek salad.jpg'
import Lemondessert from './images/lemon dessert.jpg'
import Footer from './Footer'
function Specials() {

     const  cards ={
           display:"flex",
           flexWrap:"wrap" ,
           justifyContent:"space-around",
           height:"39rem",
            marginTop:"12rem",
            paddingBottom:"5rem"
           
         
     }

     const  online_menu_btn={
             
            width:"214px",
            height:"48px",
            backgroundColor:"#F8C307",
            textDecoration:"none",
            padding:".5rem 2rem .5rem 2rem",
            color:"black",
            marginLeft:"69rem",
            borderRadius:"10px",   
     }

         const special_header={
              marginLeft:"6rem",
              fontFamily:"karla",
               fontSize:"20px",
               marginTop:"6rem"
         }


         const card1img1={
              width:"284px",
               height:"183px",
               borderRadius:"12px",
               backgroundColor:"#EDEFEE",
                paddingBottom:"19rem"
         }

           const card1h4={
            position:"absolute",
            marginTop:"-17rem",
            marginLeft:"1rem",
            overflow:"hidden",
            textOverflow:"ellipsis",
            whiteSpace:"nowrap",
           }
           const card1h6={
            position:"absolute",
            marginTop:"-17rem",
            marginLeft:"13rem",
             fontSize:"16px",
             color:"#F69606",
             fontFamily:"Caladea"
           }

           const card1p={
            position:"absolute",
            marginTop:"-13rem",
            marginLeft:"1rem",
            overflow:"hidden",
            textOverflow:"ellipsis",
            whiteSpace:"nowrap",
           }
           const card1h5={
            position:"absolute",
            marginTop:"-3rem",
            marginLeft:"1rem",
            overflow:"hidden",
            textOverflow:"ellipsis",
            whiteSpace:"nowrap",
           }
           
            const card1img2={
                position:"absolute",
                marginTop:"27rem",
                marginLeft:"-4rem",
                  width:"27px",
                  height:"27px"
            }

            const card2img1={
                width:"284px",
                 height:"183px",
                 borderRadius:"12px",
                 backgroundColor:"#EDEFEE",
                  paddingBottom:"19rem"
           }
  
             const card2h4={
              position:"absolute",
              marginTop:"-17rem",
              marginLeft:"1rem",
              overflow:"hidden",
              textOverflow:"ellipsis",
              whiteSpace:"nowrap",
             }
             const card2h6={
              position:"absolute",
              marginTop:"-17rem",
              marginLeft:"13rem",
              fontSize:"16px",
              color:"#F69606",
              fontFamily:"Caladea"
             }
  
             const card2p={
              position:"absolute",
              marginTop:"-13rem",
              marginLeft:"1rem",
              overflow:"hidden",
              textOverflow:"ellipsis",
              whiteSpace:"nowrap",
             }
             const card2h5={
              position:"absolute",
              marginTop:"-3rem",
              marginLeft:"1rem",
              overflow:"hidden",
              textOverflow:"ellipsis",
              whiteSpace:"nowrap",
             }
             
              const card2img2={
                  position:"absolute",
                  marginTop:"27rem",
                  marginLeft:"-4rem",
                    width:"27px",
                    height:"27px"
              }


              const card3img1={
                width:"284px",
                 height:"183px",
                 borderRadius:"12px",
                 backgroundColor:"#EDEFEE",
                  paddingBottom:"19rem",
                  overflow:"hidden",
                  textOverflow:"ellipsis",
                  whiteSpace:"nowrap",
           }
  
             const card3h4={
              position:"absolute",
              marginTop:"-17rem",
              marginLeft:"1rem",
              overflow:"hidden",
              textOverflow:"ellipsis",
              whiteSpace:"nowrap",
             }
             const card3h6={
              position:"absolute",
              marginTop:"-17rem",
              marginLeft:"13rem",
             fontSize:"16px",
             color:"#F69606",
             fontFamily:"Caladea"
             }
  
             const card3p={
              position:"absolute",
              marginTop:"-13rem",
              marginLeft:"1rem",
              overflow:"hidden",
              textOverflow:"ellipsis",
              whiteSpace:"nowrap",
            
             }
             const card3h5={
              position:"absolute",
              marginTop:"-3rem",
              marginLeft:"1rem",
              overflow:"hidden",
              textOverflow:"ellipsis",
              whiteSpace:"nowrap",
             }
             
              const card3img2={
                  position:"absolute",
                  marginTop:"27rem",
                  marginLeft:"-4rem",
                    width:"27px",
                    height:"27px"
              }



   return (
    <>
      <h3 style={special_header}>This week Specials</h3> 
   

      <div className ="allCards" style={cards}>

      <div className ="specials_card1" >

        <img src={greekSalad} style={card1img1}/>
       
        <h4 style={card1h4}>Greek salad</h4>
          <h6 style={card1h6}>$12.99</h6> 
             <p style={card1p}>Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing elit,<br/>
                sed do eiusmod tempor incididunt<br/>
                
              </p>
      <h5 style={card1h5}>Order a delivery</h5>
            <img src={deliveryguy} style={card1img2}/>
            </div>

            <div className ="specials_card2" >
            <img src={card1img} style={card2img1}/>
       
       <h4 style={card2h4}>Greek salad</h4>
         <h6 style={card2h6}>$5.99</h6> 
            <p style={card2p}>Lorem ipsum dolor sit amet,<br/>
               consectetur adipiscing elit,<br/>
               sed do eiusmod tempor incididunt<br/>
               
             </p>
     <h5 style={card2h5}>Order a delivery</h5>
           <img src={deliveryguy} style={card2img2}/>
           </div>
       <div className ="specials_card3" >
       <img src={Lemondessert} style={card3img1}/>
       
       <h4 style={card3h4}>Greek salad</h4>
         <h6 style={card3h6}>$5.00</h6> 
            <p style={card3p}>Lorem ipsum dolor sit amet,<br/>
               consectetur adipiscing elit,<br/>
               sed do eiusmod tempor incididunt<br/>
               
             </p>
     <h5 style={card3h5}>Order a delivery</h5>
           <img src={deliveryguy} style={card3img2}/>
           </div>
       
          </div>
     
    </>
  )
}

export default Specials