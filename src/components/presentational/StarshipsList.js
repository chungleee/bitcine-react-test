import React from 'react'

import Starship from './Starship'

const StarshipsList = ({ starships }) => {
  const ships = starships.starships.results
  if (ships === undefined) {
    return <div>...loading</div>
  } else {
    return (
      <ul>
        {ships.map((ship, idx) => {
          return <Starship key={idx} ship={ship} />
        })}
      </ul>
    )
  }
}

export default StarshipsList
