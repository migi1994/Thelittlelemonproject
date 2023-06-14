 
    import React from 'react'
    import Logo from './images/Rectangle 15.png'
    
    function Header() {
          const logo={
            
          position:"absolute",
             top:'1rem',
             left:"3rem",
             height:"82",
             width:"200px",
         
             
          }
      return (
        <>
          <img src={Logo}  style={logo}alt="sdfa"/>
        </>
      )
    }
    export default Header