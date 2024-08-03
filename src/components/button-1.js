// src/components/Sidebar.js
import React from 'react';
<<<<<<< HEAD

const Button1 = ({value}) => (
  <div>
    <button>{value}</button>
  </div>
);
=======
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
>>>>>>> master

export default Button1;
