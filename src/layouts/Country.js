import React from 'react'
import CountryCards from '../components/CountryCards'
import CountryHeader from '../components/CountryHeader'
import CountryVideo from '../components/CountryVideo'
import MapApi from '../components/MapApi'
import ScrollToTop from '../components/ScrollToTop'

function Country({ country }) {
  return (
    <div>
      <ScrollToTop />
      <div className="container">
        <CountryHeader country={country} />
        <CountryCards country={country} />
        <CountryVideo country={country} />
        <MapApi country={country} />
      </div>
    </div>
  )
}

export default Country
