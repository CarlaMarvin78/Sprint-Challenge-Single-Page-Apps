import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import { Grid } from 'semantic-ui-react';

export default function LocationsList() {
    const [locations, setLocations] = useState();
    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          const data=response.data;
          console.log (data);
          setLocations(data.results.map((location,idx)=><Grid.Column key={idx}><LocationCard location={location}/></Grid.Column>));
        });
    }, [])
  
    if(!locations) return (<p> Loading... </p>);
  
    return <section className='location-list grid-view'>
        <Grid columns={2}>{locations}</Grid>
      </section>
}
