/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStarships } from './actions/starshipsActions'
import { fetchCharNames } from './actions/charactersActions'
import StarshipsList from './components/presentational/StarshipsList'

class App extends Component {
  componentDidMount() {
    const url = 'https://swapi.co/api/starships/'

    this.props.fetchStarships(url)
    this.props.fetchCharNames()
  }

  render() {
    const { previous, next } = this.props.starships.starships
    const { starships, characters } = this.props
    return (
      <div>
        <div
          css={{
            textAlign: 'center',
            marginTop: '1rem'
          }}
        >
          <button
            onClick={() => {
              this.props.fetchStarships(previous)
            }}
            disabled={previous === null}
          >
            Prev
          </button>
          <button
            onClick={() => {
              this.props.fetchStarships(next)
            }}
            disabled={next === null}
          >
            Next
          </button>
        </div>
        <StarshipsList starships={starships} characters={characters} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships,
    characters: state.characters.charNames
  }
}

export default connect(
  mapStateToProps,
  { fetchStarships, fetchCharNames }
)(App)
