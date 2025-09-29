import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h3>CCN: {country.ccn3.ccn3} </h3>
            <h3>population: {country.population.population} </h3>
            <h3>Area: {country.area.area} </h3>
            <h3>Region: {country.region.region} </h3>
            <h3></h3>
        </div>
    );
};

export default Country;