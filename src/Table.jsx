import "./Table.css";
import React from "react";
import numeral from "numeral"
import truncateString from "./truncateText";
const Table = ({data}) => {

  return (
    <div className="table">
      <h1>Case By Countries</h1>
      <table className="table__container">
        <thead>
        <tr >
          <td className="table__head" ><strong>Flag</strong></td>
          <td className="table__head" > <strong>countries</strong></td>
          <td className="table__head" style={{color:"#fca311"}}> <strong>Cases</strong></td>
          <td className="table__head" style={{color:"red"}}> <strong>Deaths</strong></td>
          <td className="table__head" style={{color:"green"}}> <strong>Recovered</strong></td>
        </tr>
       </thead>
       <tbody>
        {data.map(singleCountry=>(<tr key={singleCountry.country} className="table__row">
         <td className="table__flag"><img className="table__image" src={singleCountry.countryInfo.flag}/></td>
         <td className="table__data">{truncateString(singleCountry.country,13)}</td>
         <td className="table__data" style={{color:"#fca311"}}>{numeral(singleCountry.cases).format("0,0")}</td>
         <td className="table__data" style={{color:"red"}}>{numeral(singleCountry.deaths).format("0,0")}</td>
         <td className="table__data" style={{color:"green"}}>{numeral(singleCountry.recovered).format("0,0")}</td>
        </tr>)) }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
