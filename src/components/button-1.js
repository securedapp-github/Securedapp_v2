// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button1({value, link}) {
const Navigate = useNavigate()
return(  
  <div>
    <button onClick={() => {
      Navigate({link})
    }}>{value}</button>
  </div>
);
}

export default Button1;
