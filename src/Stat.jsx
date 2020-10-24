import React from "react";
import "./Stat.css";

const Stat = ({ number, info, delta, lastUpdate, color, icon, onclick,active}) => {
  return (
    <div 
    onClick={onclick}
      style={{ border: `1px solid ${color}`, color: `${color}`,cursor:"pointer" }}
      className={`stat ${active && "selected"}`}
    >
      <div className= "stat__icon">
     
     {icon}

      </div>
      <div className="stat__data">
      <h1 className="stat__number">{number}</h1>
      <h4 className="stat__info">{info}</h4>
      <h3 className="stat__delta">{delta}</h3>
      <span className="stat__lastUpdate">{lastUpdate}</span>
      </div>
    </div>
  );
};

export default Stat;
