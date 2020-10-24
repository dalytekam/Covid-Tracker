import React from "react"
import {Circle, Popup} from "react-leaflet";
import numeral from "numeral"

 const caseNature = {
           cases:{
              
               color:"#fca311",
               multiplier:0.25
           },
           deaths:{
             
               color:"red",
               multiplier:3
           },
           recovered:{
               
               color:"green",
               multiplier:0.25
           }

      }

const drawCirclesOnTheMap=(allcountries,type="cases")=>(

     
    allcountries.map((country)=>(
        <Circle key={country.country}
       center={[country.countryInfo.lat,country.countryInfo.long]}
       fillOpacity={0.3}
       fillColor={caseNature[type].color}
       radius={(country[type])*caseNature[type].multiplier}
       color= {caseNature[type].color}>
           

        <Popup>
          <div className="popup">
              <div className="popup__flag" style={{backgroundImage:`url(${country.countryInfo.flag})`}}></div>
              <div className="popup__country">{country.country}</div>
              <div className="popup__cases">{`Cases: ${numeral(country.cases).format("0,0")}`}</div>
               <div className="popup__active">{`Active: ${numeral(country.active).format("0,0")}`}</div>
               <div className="popup__critical">{`Critical: ${numeral(country.critical).format("0,0")}`}</div>
              <div className="popup__deaths">{`Deaths: ${numeral(country.deaths).format("0,0")}`}</div>
              <div className="popup__recovered">{`Recovered: ${numeral(country.recovered).format("0,0")}`}</div>
             
          </div>
        </Popup>
       </Circle>
       
        
    ))
)
export default drawCirclesOnTheMap
