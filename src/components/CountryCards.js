import React from 'react'

function CountryCards({country}) {
  return (
    <div className="country-cards">
      <h2>The most popular places in {country.name}</h2>
      <div className="country-places">
        {country.photos.map((photo) => (
          <div className="country-card" key={photo.id}>
            <img src={photo.place} alt="" />
            <p>{photo.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountryCards
