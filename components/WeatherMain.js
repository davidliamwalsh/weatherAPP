import React from 'react'

export default function WeatherMain(props) {

  const {location , temperature , description , region , country , wind_speed , pressure , precip , humidity , img} = props.weatherData

  return (
    <>
      <p>{location}</p>
      <p>{temperature}</p>
      <p>{description}</p>
      <p>{region}</p>
      <p>{country}</p>
      <p>{wind_speed}</p>
      <p>{pressure}</p>
      <p>{precip}</p>
      <p>{humidity}</p>
      <img src={img} alt=""/>
    </>
  )
}