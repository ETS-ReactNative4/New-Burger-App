import React from 'react';

import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

const Layout=(props)=>(
  <div>
    <HamburgerIcon />
    <main>
      {props.children}
    </main>
  </div>
)

export default Layout;