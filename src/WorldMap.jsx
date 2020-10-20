import React from "react";
import"./WorldMap.css"
import {TileLayer,Map} from "react-leaflet"
import drawCirclesOnTheMap from "./dynamicData"


const WorldMap = ({mapCenter, mapZoom, countries }) => {
  return (
    
       <Map center={mapCenter} zoom={mapZoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {drawCirclesOnTheMap(countries)}
      </Map>
   
  );
};

export default WorldMap;
