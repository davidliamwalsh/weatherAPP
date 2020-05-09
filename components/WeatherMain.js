import React from 'react'

export default function WeatherMain(props) {

  const {location , temperature , description , region , country , wind_speed , pressure , precip , humidity , img} = props.weatherData

  return (
    <div className="c-weather">

      <div className="c-weather__main">
        <div className="c-weather__main--section">
          <p className="c-weather__main--section-details"><span>{temperature}</span><sup>&#8451;</sup>, {description}</p>
          <p className="c-weather__main--section-details">{location}</p>
          <p className="c-weather__main--section-details">{region},<br /> {country}</p>
        </div>
        <div className="c-weather__main--hero">
          <img src={img} alt=""/>
        </div>
      </div>
      
      <div className="c-weather__extra">
        <div className="c-weather__extra--section">
          <p className="c-weather__extra--section-title">Wind Speed<span className="c-weather__extra--section-metric">(km/hr)</span></p>
          <p className="c-weather__extra--section-main">{wind_speed}</p>
        </div>
        <div className="c-weather__extra--section">
          <p className="c-weather__extra--section-title">Pressure<span className="c-weather__extra--section-metric">(millibar)</span></p>
          <p className="c-weather__extra--section-main">{pressure}</p>
        </div>
        <div className="c-weather__extra--section">
          <p className="c-weather__extra--section-title">Precip<span className="c-weather__extra--section-metric">(mm)</span></p>
          <p className="c-weather__extra--section-main">{precip}</p>
        </div>
        <div className="c-weather__extra--section">
          <p className="c-weather__extra--section-title">Humidity<span className="c-weather__extra--section-metric">(%)</span></p>
          <p className="c-weather__extra--section-main">{humidity}</p>
        </div>
      </div>
    </div>
  )
}