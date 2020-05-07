import React from 'react'

export default function Navbar() {
  return (
    <div className="c-navbar">
      <div className="c-navbar__title">Title</div>
      <div className="c-navbar__input">
        <input className="c-navbar__imput--box" type="text" placeholder="...enter location" />
      </div>
    </div>
  )
}