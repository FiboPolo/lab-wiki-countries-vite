import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import countriesJson from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {
  const [countriesState, setCountriesState] = useState(countriesJson)

  useEffect(() => {
    setCountries(countriesJson)
  },[])

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <Route path="/" exact>
              <CountriesList countries={countries} />
            </Route>
            <Route path="/:id">
              <CountryDetails countries={countries} />
            </Route>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
