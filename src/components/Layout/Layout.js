import React from 'react';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

const Layout=(props)=>{
 
  return(
    <div>
      <HamburgerIcon />
      <main>
        {props.children}
      </main>
    </div>
  )

  }



export default Layout;