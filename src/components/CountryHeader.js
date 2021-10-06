import React, { useEffect, useState } from 'react'


function CountryHeader({ country }) {
  const [money, setMoney] = useState([])

  useEffect(() => {
    const fetchRates = async () => {
      await fetch(
        'https://v1.nocodeapi.com/farhod/cx/vPXRVmUADncRWwQI/rates?source=AUD&target=USD'
      )
        .then((response) => response.json())
        .then((result) => setMoney(result))
        .catch((error) => console.log('error', error))
    }

    fetchRates()
  }, [])

  return (
    <div className="country-header">
      <img src={country.image} alt="" />
      <div className="country-about">
        <h1>{country.name}</h1>
        <p>{country.description}</p>
        <br />
        <div className="widgets">
            <p>Date:</p>
            <p>{money.date}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryHeader
