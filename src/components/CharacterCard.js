import React from 'react'
import {Link} from "react-router-dom";

export default function CharacterCard (props) {
  const char = props.character;
  return (
  <div class='card ui'>
    <img src={char.image} alt={char.name + "'s picture"}/>
    <p>{char.name}</p>
    <p>{char.species} {char.status}</p>
    <p>Location: {char.location.name}</p>
    <Link to='/episodes'>{char.episode.length} Episodes</Link>
  </div> );
}
