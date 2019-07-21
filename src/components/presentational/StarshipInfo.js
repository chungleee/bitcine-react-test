import React from 'react'

const StarshipInfo = ({ match }) => {
  return <div>{match.params.name}</div>
}

export default StarshipInfo
