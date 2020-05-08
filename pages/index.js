import { Component } from 'react'
import Axios from 'axios'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import WeatherMain from '../components/WeatherMain'

class Index extends Component {

  state = {
    coords: {
      latitude: 45,
      longitude: 60
    },
    data: {},
    imputData: ''
  }

  // get device location
  componentDidMount() {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({
          coords: newCoords
        })

        // api call
        Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {

          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons
          }
          this.setState({ data:weatherData })
        })

      })
    } else {
      console.log('error')
    }
  }

  change = (value) => {
    this.setState({ inputData: value })
  }

  changeWeather = (event) => {
    event.preventDefault()

    Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${this.state.inputData}`).then(res => {
      
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons
      }
      this.setState({ data:weatherData })
    })
  }

  render () {
    return <>
      <Navbar changeWeather = {this.changeWeather} changeRegion={this.change} />
      <WeatherMain weatherData = {this.state.data} />
    </>
  }
}

export default Index