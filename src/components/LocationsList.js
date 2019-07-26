import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [locations, setLocations] = useState();
    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          const data=response.data;
          console.log (data);
          setLocations(data.results.map((location,idx)=><LocationCard key={idx} location={location}/>));
        });
    }, [])
  
    if(!locations) return (<p> Loading... </p>);
  
    return <section className='location-list grid-view'>
        {locations}
      </section>
}
