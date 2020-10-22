import React from "react"
import {Circle, Popup} from "react-leaflet";
import numeral from "numeral";



const drawCirclesOnTheMap=(allcountries)=>(
    allcountries.map((country)=>(
        <Circle key={country.country}
       center={[country.countryInfo.lat,country.countryInfo.long]}
       fillOpacity={0.3}
       fillColor={"green"}
       radius={country.cases/4}
       color= {"red"}>
           

        <Popup>
           <h2>{country.country}</h2>
           <h3>Recovered:{country.recovered}</h3>
        </Popup>
       </Circle>
       
        
    ))
)
export default drawCirclesOnTheMap
