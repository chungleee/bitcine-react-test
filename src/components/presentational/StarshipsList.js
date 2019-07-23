import React from 'react'

import Starship from './Starship'

const StarshipsList = ({ starships }) => {
  let ships = starships.starships.results

  if (ships === undefined) {
    return <div>...loading</div>
  } else {
    ships.splice(8, 0, { name: 'leon chung' })
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
