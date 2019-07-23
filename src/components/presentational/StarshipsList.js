import React from 'react'
import Starship from './Starship'

const StarshipsList = ({ starships, characters }) => {
  let ships = starships.starships.results

  if (ships === undefined && characters.length === 0) {
    return <div>...loading</div>
  } else {
    const randomIdx = Math.floor(Math.random() * characters.length)
    const randomJedi = characters[randomIdx]

    if (randomJedi !== undefined) {
      ships.splice(8, 0, randomJedi)
    }

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
