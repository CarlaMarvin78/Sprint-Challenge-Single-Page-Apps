import React from 'react'
import {Link} from "react-router-dom";

export default function EpisodeCard (props) {
  const { id, name, air_date, episode, characters } = props.episode;
  return (<div className='card ui'>
    <p>{name}</p>
    <p>{episode} - {air_date}</p>
    <Link to='/characters'>{characters.length} Characters</Link>
  </div>);
}