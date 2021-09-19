import React from 'react'
import ReactPlayer from 'react-player'

function CountryVideo({ country }) {
  return (
    <div className="country-video">
      <h2>Watch the video about {country.name}</h2>
      <ReactPlayer url={country.video} width="100%" height="100vh" controls />
    </div>
  )
}

export default CountryVideo
