import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { Grid } from 'semantic-ui-react';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState();
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        const data=response.data;
        console.log (data);
        setEpisodes(data.results.map((episode,idx)=><Grid.Column  key={idx}><EpisodeCard episode={episode}/></Grid.Column>));
      });
  }, [])

  if(!episodes) return (<p> Loading... </p>);

  return <section>
      <Grid columns={2}>{episodes}</Grid>
    </section>

}
