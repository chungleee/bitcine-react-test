import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Global, css } from '@emotion/core'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import App from './App'
import StarshipInfo from './components/presentational/StarshipInfo'

const initialState = {}
const middlewares = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
        }
        body {
          width: 90%;
          margin: auto;
        }

        a {
          color: black;
        }
      `}
    />
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/:name" component={StarshipInfo} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
