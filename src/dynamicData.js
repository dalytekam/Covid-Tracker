import React from "react"
import {Circle, Popup} from "react-leaflet";
import numeral from "numeral";



const drawCirclesOnTheMap=(allcountries)=>(
    allcountries.map((country)=>(
        <Circle key={country.country}
       center={[country.countryInfo.lat,country.countryInfo.long]}
       fillOpacity={0.5}
       fillColor={"green"}
       radius={country.cases>1000000?country.cases/4:country.cases}
       color= {"red"}>
           

        <Popup>
           {country.country}
        </Popup>
       </Circle>
       
        
    ))
)
export default drawCirclesOnTheMap
