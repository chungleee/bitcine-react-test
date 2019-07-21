import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStarships } from '../../actions/starshipsActions'
import Starship from '../presentational/Starship'

class StarshipsList extends Component {
  componentDidMount() {
    const url = 'https://swapi.co/api/starships/'
    this.props.fetchStarships(url)
  }
  render() {
    const ships = this.props.starships.starships.results
    if (ships === undefined) {
      return <div>...loading</div>
    } else {
      return (
        <ul>
          {ships.map((ship, idx) => {
            return <Starship key={idx} ship={ship} />
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
)(StarshipsList)
