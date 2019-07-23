/** @jsx jsx */
import { jsx } from '@emotion/core'
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
      <main
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1>{match.params.name}</h1>
        {Object.keys(info).map(key => {
          return (
            <p css={{ marginBottom: '0.5rem' }} key={key}>{`${key}: ${
              info[key]
            }`}</p>
          )
        })}
      </main>
    </div>
  )
}

export default StarshipInfo
