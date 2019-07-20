import React from 'react'

const Starship = ({ name, model, manufacturer }) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Model: {model}</p>
      <p>Manufacturer: {manufacturer}</p>
    </li>
  )
}

export default Starship
