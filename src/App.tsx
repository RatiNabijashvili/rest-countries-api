import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeContext, Theme } from './Context'
import Main from './Main/Main'
import CountryDetails from './Main/CountryDetails/CountryDetails'

function App() {
  const [theme, setTheme] = useState(Theme.Light)
  const [countryData, setCountryData] = useState([])
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, countryData, setCountryData }}
    >
      <Routes>
        <Route path='/rest-countries-api' element={<Main />} />
        <Route
          path='/rest-countries-api/details'
          element={<CountryDetails />}
        />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
