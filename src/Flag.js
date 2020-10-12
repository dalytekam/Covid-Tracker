import React from 'react';
import "./Flag.css"
const Flag = ({imageSrc}) => {
    return ( <div style={{backgroundImage:`url(${imageSrc})`,
   objectFit:"contain",
   height:"200px",
   backgroundSize:"cover",
   backgroundPosition:"center center"}} className="flag">
       
    </div> );
}
 
export default Flag;