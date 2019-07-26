import React from 'react'
import {Link} from "react-router-dom";

export default function LocationCard (props) {
  const { id, name, type, dimension, residents } = props.location;
  return (<div className='card ui'>
    <p>{name}</p>
    <p>{type} - {dimension}</p>
    <Link to='/characters'>{residents.length} Residents</Link>
  </div>);
}