import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState();
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        const data=response.data;
        console.log (data);
        setEpisodes(data.results.map((episode,idx)=><EpisodeCard key={idx} episode={episode}/>));
      });
  }, [])

  if(!episodes) return (<p> Loading... </p>);

  return <section className='character-list grid-view'>
      {episodes}
    </section>

}
