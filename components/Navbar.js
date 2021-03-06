import React from 'react'

export default function Navbar(props) {
  return (
    <div className="c-navbar">
      <div className="c-navbar__title">Weather App</div>
      <div className="c-navbar__input">
        <form className="c-navbar__input--form" onSubmit={(e) => props.changeWeather(e)}>
          <input className="c-navbar__input--box" type="text" placeholder="enter location" onChange={(e) => { props.changeRegion(e.target.value) }} />
        </form>
      </div>
    </div>
  )
}