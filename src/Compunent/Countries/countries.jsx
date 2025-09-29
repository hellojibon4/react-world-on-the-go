import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountris] = useState([]);
     const handlevisitedCountries = (country) => {
        console.log("visited country", country);
     }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    return (
        <div >
            <h1>In the countries: {countries.length} </h1>
            <h3>Total country visited: </h3>
            <div className='Countries'>
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handlevisitedCountries = {handlevisitedCountries}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

