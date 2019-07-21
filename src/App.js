import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchStarships } from './actions/starshipsActions'
import StarshipsList from './components/presentational/StarshipsList'

class App extends Component {
  componentDidMount() {
    const url = 'https://swapi.co/api/starships/'
    this.props.fetchStarships(url)
  }

  render() {
    const previous = this.props.starships.starships.previous
    const next = this.props.starships.starships.next
    return (
      <Fragment>
        <div>
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
        <StarshipsList starships={this.props.starships} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships
  }
}

export default connect(
  mapStateToProps,
  { fetchStarships }
)(App)
