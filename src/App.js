import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStarships } from './actions/starshipsActions'
import Starship from './components/presentational/Starship'

class App extends Component {
  componentDidMount() {
    this.props.fetchStarships()
  }
  render() {
    const ships = this.props.starships.starships.results

    if (ships === undefined) {
      return <div>...loading</div>
    } else {
      return (
        <ul>
          {ships.map((ship, idx) => {
            return (
              <Starship
                key={idx}
                name={ship.name}
                model={ship.model}
                manufacturer={ship.manufacturer}
              />
            )
          })}
        </ul>
      )
    }
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
