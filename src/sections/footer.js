import React from 'react';
import Button1 from '../components/button-1';
import BrandLogos from '../components/brand-logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Subscribe() {

}

const Footer = () => (
  <div>
    <div>
    <div>
        <h4>Join our newsletter</h4>
        <p>Keep upto date evrything SecureDapp</p>
    </div>
    <div>
        <input placeholder='email' type='email'/>
        <button onClick={Subscribe}>Subscribe</button>
    </div>
    </div>
    <hr/>
    <div>
        <div>
            <div>
                <img src='/images/securedapp-logo.png' alt='logo'/>
            </div>
            <div>
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon icon={faSun}/>
            </div>
        </div>
        <div>
            <div>Products
                <li>Solidity Shield scan</li>
                <li>Secure watch</li>
                <li>Scure Audit</li>
            </div>
            <div>Services
                <li>Features</li>
                <li>Integration</li>
                <li>Pricing</li>
                <li>Roadmap</li>
            </div>
            <div>Company
                <li>About us</li>
            </div>
            <div>Resources
                <li>Blogs</li>
                <li>Documentation</li>
                <li>Content</li>
            </div>
        </div>
    </div>
    <hr/>
    <div>
        <div>
            <a>Privacy Policy </a>
            <a>Terms & Conditions</a>
        </div>
        <div>
            <p>© 2024, Secure Dapp. All rights reserved</p>
        </div>
    </div>
  </div>
);

export default Footer;
