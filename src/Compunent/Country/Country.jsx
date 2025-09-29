import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country)
    const handalVisited =() =>{
        console.log("button Clicked")
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h3>CCN: {country.ccn3.ccn3} </h3>
            <h3>Region: {country.region.region} </h3>
            <h3>Area: {country.area.area} {
                country.area.area > 30000 ? "Big Countru" : "Small Country"
            } </h3>
            <h3>population: {country.population.population} </h3>
            <h3></h3>
            <button onClick={handalVisited}>Not Visited</button>
        </div>
    );
};

export default Country;