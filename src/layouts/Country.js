import React from 'react'
import CountryCards from '../components/CountryCards'
import CountryHeader from '../components/CountryHeader'
import CountryVideo from '../components/CountryVideo'
import MapApi from '../components/MapApi'
import ScrollToTop from '../components/ScrollToTop'
import Fade from 'react-reveal-animation'

function Country({ country }) {
  return (
    <div>
      <ScrollToTop />
      <div className="container">
        <Fade>
          <CountryHeader country={country} />
          <Fade>
            <CountryCards country={country} />
          </Fade>
          <CountryVideo country={country} />
          <MapApi country={country} />
        </Fade>
      </div>
    </div>
  )
}

export default Country
