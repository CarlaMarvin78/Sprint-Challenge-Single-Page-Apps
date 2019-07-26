import React from 'react'

export default function CharacterCard (props) {
  const char = props.character;
  return (
  <div class='card ui'>
    <img src={char.image} alt={char.name + "'s picture"}/>
    <p>{char.name}</p>
    <p>{char.species} {char.status}</p>
    <p>Location: {char.location.name}</p>
    <p>Origin: {char.origin.name}</p>
    <a href='/episodes'>Episodes</a>
  </div> );
}
