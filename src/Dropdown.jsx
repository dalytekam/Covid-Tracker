import React, { useEffect, useState } from "react";
import "./Dropdown.css";
import requester from "./axiosConfig";

const Dropdown = ({onCountryChange}) => {
  const [countries, setCountries] = useState([]);
  
 
  useEffect(() => {
    const fetchCountriesData = async () => {
      const countriesResult = await requester.get("/countries");
     

     setCountries(countriesResult.data);
    };
    
    fetchCountriesData();
     
      
  }, []);
 


  
  
  return (
    <div className="select">
      <select onChange= {onCountryChange} >
        <option value="worlwide">Worldwide</option>
        {countries.map((country)=>(<option key= {country.country} value= {country.countryInfo.iso3}>
          
        {country.country}
          </option>))}
      </select>
      <div className="select_arrow"></div>
    </div>
  );
};

export default Dropdown;
