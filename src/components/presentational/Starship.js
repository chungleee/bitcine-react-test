import React from 'react'
import { Link } from 'react-router-dom'

const Starship = ({ ship }) => {
  const { name, model, manufacturer } = ship
  return (
    <li>
      <p>
        Name:
        <Link
          to={{
            pathname: `/${name}`,
            state: { ship }
          }}
        >
          {name}
        </Link>
      </p>
      {model === undefined ? null : <p>{`Model: ${model}`}</p>}
      {manufacturer === undefined ? null : (
        <p>{`Manufacturer: ${manufacturer}`}</p>
      )}
    </li>
  )
}

export default Starship
