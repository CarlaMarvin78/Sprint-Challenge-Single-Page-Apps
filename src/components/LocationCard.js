import React from 'react'

export default function LocationCard (props) {
  const { id, name, type, dimension, residents } = props.location;
  return (<div className='card ui'>
    <p>{name}</p>
    <p>{type} - {dimension}</p>
    <a href='/characters'>{residents.length} Residents</a>
  </div>);
}