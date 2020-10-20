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
import Flag from "./Flag";
import sortData from "./sortTheData";

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
  const [mapZoom, setMapZoom] = useState(3);
 
  
  return (
    <div className="app">
      <div className="headerContainer">
        <Header title="covid 19 tracker" />
      </div>
      <div className="mainContainer">
        <div className="mainContainer__left">
          <div className="dropDownContainer">
            <Dropdown onCountryChange = {onCountrySelect} />
          </div>
          <Flag imageSrc={country.countryInfo?country.countryInfo.flag:"https://via.placeholder.com/225x150"}/>
          <Stat
            number={numeral(country.cases).format("0,0")}
            info="TOTAL CASES"
            delta={`+${numeral(country.todayCases).format("0,0")} New Cases`}
            lastUpdate={`Last update : ${getUtcDate(country.updated)}`}
            color={"#fca311"}
          />
          <Stat
            number={numeral(country.deaths).format("0,0")}
            info="TOTAL DEATHS"
             delta={`+${numeral(country.todayDeaths).format("0,0")} New Deaths`}
             lastUpdate={`Last update : ${getUtcDate(country.updated)}`}
            color={"red"}
          />
          <Stat
            number={ numeral(country.recovered).format("0,0")}
            info="TOTAL RECOVERIES"
             delta={`+${numeral(country.todayRecovered).format("0,0")} New Recoveries`}
             lastUpdate={`Last update : ${getUtcDate(country.updated)}`}
            color={"green"}
          />
        </div>
        <div className="mainContainer__middle">
          <WorldMap countries = {tableCountries} mapCenter = {mapCenter}  mapZoom={mapZoom}/>
        </div>
        <div className="mainContainer__right">
          <Table data ={tableCountries} />
        </div>
      </div>
    </div>
  );
}

export default App;
