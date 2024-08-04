// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button1({value, link, isHome}) {
const Navigate = useNavigate()
return(  
  <div>
    <button onClick={() => {
      if(isHome) {
        // schedule demo pop-out
      } else {
        Navigate({link})
      }
    }}>{value}</button>
  </div>
);
}

export default Button1;
