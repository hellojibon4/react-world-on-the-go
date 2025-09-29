import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handlevisitedCountries }) => {
    // console.log(country)
    const [Visited, setVisited] = useState(false);
    // console.log(handlevisitedCountries)
    const handalVisited = () => {

        // system=1
        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // system=2
        // setVisited(Visited ? false : true)

        // system=3
        setVisited(!Visited);
        handlevisitedCountries(country);
    }

    return (
        <div className={`country ${Visited && `country-Visited`}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h3>CCN: {country.ccn3.ccn3} </h3>
            <h3>Region: {country.region.region} </h3>
            <h3>Area: {country.area.area} {
                country.area.area > 30000 ? "Big Countru" : "Small Country"
            } </h3>
            <h3>population: {country.population.population} </h3>
            <h3></h3>
            <button onClick={handalVisited}>
                {Visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;