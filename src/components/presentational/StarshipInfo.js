/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

const StarshipInfo = ({ history, location, match }) => {
  const info = location.state.ship
  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    },
    p: { marginBottom: '0.5rem' }
  }

  return (
    <div>
      <button
        onClick={() => {
          history.goBack()
        }}
      >
        Back
      </button>
      <main css={styles.main}>
        <h1>{match.params.name}</h1>
        {Object.keys(info).map((key, idx) => {
          return <p css={styles.p} key={idx}>{`${key}: ${info[key]}`}</p>
        })}
      </main>
    </div>
  )
}

export default StarshipInfo
