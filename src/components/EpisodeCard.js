import React from 'react'

export default function EpisodeCard (props) {
  const { id, name, air_date, episode, characters } = props.episode;
  return (<div className='card ui'>
    <p>{name}</p>
    <p>{episode} - {air_date}</p>
    <a href='/characters'>{characters.length} Characters</a>
  </div>);
}