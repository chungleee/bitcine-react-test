import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStarships } from './actions/starshipsActions'

class App extends Component {
  componentDidMount() {
    this.props.fetchStarships()
  }

  render() {
    return <div>hello</div>
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
