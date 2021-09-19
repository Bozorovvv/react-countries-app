import React from 'react'
import {Link} from 'react-router-dom'

function Blogs({ country }) {
  return (
    <Link to={country.name} className="blog-item">
      <div className="blog-img">
        <img src={country.image} alt="1" />
      </div>
      <div className="blog-text">
        <h2>{country.name}</h2>
        <div className="blog-span">
          <span>{country.capital}</span>
          <span className="material-icons">navigate_next</span>
        </div>
      </div>
    </Link>
  )
}

export default Blogs
