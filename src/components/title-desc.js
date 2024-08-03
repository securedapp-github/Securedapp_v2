import React from 'react';
import { useState } from 'react';

function TitleDesc({title, desc}) {
return(
    <div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
)
}

export default TitleDesc;
