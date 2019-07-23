/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

const Starship = ({ ship }) => {
  const { name, model, manufacturer } = ship

  const styles = {
    li: {
      listStyle: 'none',
      margin: '1rem 0',
      padding: '1rem',
      boxShadow: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )'
    }
  }

  return (
    <li css={styles.li}>
      <p>
        Name:
        <Link
          to={{
            pathname: `/${name}`,
            state: { ship }
          }}
        >
          {` ${name}`}
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
