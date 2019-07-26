import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Grid } from 'semantic-ui-react';

export default function CharacterList() {
  const [characters, setCharacters] = useState();
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const data=response.data;
        console.log (data);
        setCharacters(data.results.map((character,idx)=><Grid.Column key={idx}><CharacterCard character={character}/></Grid.Column>));
      });
  }, [])

  if(!characters) return (<p> Loading... </p>);

  return <section className='character-list'>
      <Grid columns={2}>{characters}</Grid>
    </section>

}
