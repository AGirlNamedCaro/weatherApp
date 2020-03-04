import React from 'react'
import './styles/Header.css'


export const Header = () => {
  return (
    <div className='header' data-testid='header'>
      <nav className='nav'>
        <div>
        <div className='logo'>
          <h2>Weather App Clone</h2>
          </div>
          <div className='search'>
        <form>
          <input placeholder='Enter city name here'></input>
          <button type='submit'>Search</button>
        </form>
        </div>
        </div>
         </nav>
    </div>
  )
}