// src/components/Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun} from '@fortawesome/free-solid-svg-icons';

function ThemeSwitch() {

}

const Navbar = () => (
  <nav>
    <div>
        <logo><img src ="" alt='logo'/></logo>
    </div>
    <div>
    <ul>
      <li>Products</li>
      <li>Services</li>
      <li>Resources</li>
      <li>Pricing</li>
    </ul>
    </div>
    <div>
        <button onClick={ThemeSwitch}>
        <FontAwesomeIcon icon={faSun} />
        </button>
        <p/>
        <button>Request Quote</button>
    </div>
    
  </nav>
);

export default Navbar;
