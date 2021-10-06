import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './layouts/Footer'
import Country from './layouts/Country'
import Header from './layouts/Header'
import Main from './layouts/Main'

function App({ countries }) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {countries.map((country) => (
            <Route exact path={'/' + country.name}>
              <Country country={country} key={country.id} />
            </Route>
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
