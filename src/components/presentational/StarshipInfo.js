import React from 'react'

const StarshipInfo = ({ history, location, match }) => {
  const info = location.state.ship
  return (
    <div>
      <button
        onClick={() => {
          history.goBack()
        }}
      >
        Back
      </button>
      <h1>{match.params.name}</h1>
      {Object.keys(info).map(key => {
        return <div>{`${key}: ${info[key]}`}</div>
      })}
    </div>
  )
}

export default StarshipInfo
