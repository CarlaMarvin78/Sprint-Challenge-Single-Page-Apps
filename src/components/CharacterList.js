import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState();
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const data=response.data;
        console.log (data);
        setCharacters(data.results.map((character,idx)=><CharacterCard key={idx} character={character}/>));
      });
  }, [])

  if(!characters) return (<p> Loading... </p>);

  return <section className='character-list grid-view'>
      {characters}
    </section>

}
