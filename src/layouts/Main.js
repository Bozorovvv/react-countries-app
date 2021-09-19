import React, { useState } from 'react'
import countries from '../data/data'
import Blogs from '../components/Blog'
import ScrollToTop from '../components/ScrollToTop'

function Main() {
  const [search, setSearch] = useState('')

  const filteredCountry = countries.filter((country) => {
    return (
      country.capital
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) ||
      country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  })

  return (
    <>
      <ScrollToTop />
      <div className="banner">
        <div className="container">
          <h3 className="banner-title">
            "<span>Travel</span> as the greatest science and serious science
            helps us to rediscover ourselves."
          </h3>
          <p>- Albert Camus</p>
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-btn" onClick={() => filteredCountry}>
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="img"></div>
        </div>
      </div>
      <section className="blog">
        <div className="container">
          <div className="title">
            <h2>The best countries for travelling</h2>
          </div>
          <div className="blog-content">
            {filteredCountry.map((country) => (
              <Blogs key={country.id} country={country} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
