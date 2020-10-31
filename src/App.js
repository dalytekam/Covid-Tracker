import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./App.css";
import Stat from "./Stat";
import Dropdown from "./Dropdown";
import WorldMap from "./WorldMap";
import Table from "./Table";
import requester from "./axiosConfig";
import getUtcDate from "./dateFormatter"
import numeral from "numeral"
/*import Flag from "./Flag";*/
import sortData from "./sortTheData";
import {MdLocalHospital} from "react-icons/md";
import {GiDeathSkull} from "react-icons/gi";
import {FaThumbsUp} from "react-icons/fa";

function App() {
 const [country, setCountry] = useState("Wordwide");
 
const onCountrySelect = async (event)=>{
   
   event.preventDefault();
    const selectedCountry = event.target.value;
    console.log(selectedCountry)
    setCountry(selectedCountry);
 const url = selectedCountry ==="worlwide"?"/all":`/countries/${selectedCountry}?strict=true`
  const fetchCountryData = await requester.get(url);
    setCountry(fetchCountryData.data);
 setMapCenter(fetchCountryData.data.country?[fetchCountryData.data.countryInfo.lat,fetchCountryData.data.countryInfo.long]:[7.369722,12.354722]);
   setMapZoom(5);
   console.log(mapCenter);
  }
useEffect(()=>{
  const handleInitialPageLoading = async()=>{
 
  const fetchCountryData = await requester.get("/all");
    setCountry(fetchCountryData.data);}
    handleInitialPageLoading()
},[])
 
 

console.log(country)


//! from table
 const [tableCountries, setTableCountries] = useState([]);
  
 
 useEffect(() => {
    const fetchTableCountriesData = async () => {
      const tableCountriesResult = await requester.get("/countries");
     
const sortedData = sortData(tableCountriesResult.data)
     setTableCountries(sortedData);
    };
    
    fetchTableCountriesData();
     
      
  }, []);

  const [mapCenter,setMapCenter]= useState([7.369722, 12.354722]);
  const [mapZoom, setMapZoom] = useState(2);
  const [type,setType] = useState("cases");
  
  return (
    <div className="app">
      <div className="headerContainer">
        <Header title="Real time covid 19 tracker" />
      </div>
      <div className="mainContainer">
        <div className="mainContainer__left">
          <div className="dropDownContainer">
            <Dropdown onCountryChange = {onCountrySelect} />
          </div>
         
          <Stat
          onclick={e=>setType("cases")}
          active={type==="cases"}
            number={numeral(country.cases).format("0,0")}
            info="TOTAL CASES"
            delta={`+${numeral(country.todayCases).format("0,0")} New Cases`}
            lastUpdate={`Last update : ${getUtcDate(country.updated)}`}
            color={"#fca311"}
            icon = {<MdLocalHospital size= "1rem"/>}
            
          
          />
          <Stat
           onclick={e=>setType("deaths")}
            active={type==="deaths"}
            number={numeral(country.deaths).format("0,0")}
            info="TOTAL DEATHS"
             delta={`+${numeral(country.todayDeaths).format("0,0")} New Deaths`}
             lastUpdate={`Last update : ${getUtcDate(country.updated)}`}
            color={"red"}
             icon = {<GiDeathSkull size= "1rem"/>}
          />
          <Stat
           onclick={e=>setType("recovered")}
            active={type==="recovered"}
            number={ numeral(country.recovered).format("0,0")}
            info="TOTAL RECOVERIES"
             delta={`+${numeral(country.todayRecovered).format("0,0")} New Recoveries`}
             lastUpdate={`Last update : ${getUtcDate(country.updated)}`}
            color={"green"}
            icon= {<FaThumbsUp size= "1rem"/>}
          />
        </div>
        <div className="mainContainer__middle">
          <WorldMap countries = {tableCountries} mapCenter = {mapCenter}  mapZoom={mapZoom} type={type}/>
        </div>
        <div className="mainContainer__right">
          <Table data ={tableCountries} />
        </div>
      </div>
    </div>
  );
}

export default App;
