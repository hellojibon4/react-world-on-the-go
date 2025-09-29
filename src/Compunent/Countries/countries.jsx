import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountris] = useState([]);
    const handlevisitedCountries = (country) => {
        console.log("visited country", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountris(newVisitedCountries);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    return (
        <div >
            <h1>In the countries: {countries.length} </h1>
            <h3>Total country visited: {visitedCountries.length} </h3>
            <ol className='Countries'>
                {
                    visitedCountries.map(country => 
                    <div className= "country"  key={country.ccn3.ccn3}>
                        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                        <h3>Name: {country.name.common} </h3>
                        <h3>CCN: {country.ccn3.ccn3} </h3>
                        <h3>Area: {country.area.area} {
                            country.area.area > 30000 ? "Big Countru" : "Small Country"
                        } </h3>
                        {/* <h3>Region: {country.region.region} </h3>
                        <h3>population: {country.population.population} </h3> */}
                       
                        
                    </div>)
                }
            </ol>
            <div className='Countries'>
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handlevisitedCountries={handlevisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

