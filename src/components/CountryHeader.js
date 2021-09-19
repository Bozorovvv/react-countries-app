import React from 'react'

function CountryHeader({country}) {
  return (
    <div className="country-header">
      <img src={country.image} alt="" />
      <div className="country-about">
        <h1>{country.name}</h1>
        <p>{country.description}</p>
        <h2>Here must be Widgets</h2>
      </div>
    </div>
  )
}

export default CountryHeader
