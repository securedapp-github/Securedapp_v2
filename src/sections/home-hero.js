import React from 'react';
import Button1 from '../components/button-1';
import BrandLogos from '../components/brand-logos';

const Hero = () => (
  <div>
    <h3>Comprehensive Blockchain Security</h3>
    <p>97% of Blockchain hacks are preventable. Securing your blockchain journey</p>
    <img src=''></img>
    <Button1 value={"Get Started"}/>
    <BrandLogos/>
    <div>
      <div>
        <p>100+</p>
        <p>Projects Secured</p>
      </div>
      <div>
        <p>2400+</p>
        <p>Vulnerabilities detected</p>
      </div>
      <div>
        <p>$600+</p>
        <p>Digital assets protected</p>
      </div>
    </div>
  </div>
);

export default Hero;
