import { Component } from 'react'
import Axios from 'axios'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import WeatherMain from '../components/WeatherMain'
import { Facebook } from 'react-content-loader'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
       loading: true,
       coords: {
        latitude: 45,
        longitude: 60
      },
      data: {},
      inputData: ''
    }
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
        Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${this.state.coords.latitude},${this.state.coords.longitude}`)
        .then(res => {

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
          console.log(res)
          this.setState({ data:weatherData })
        })
        .then(this.setState({ loading: false }))
        
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

    const MyFacebookLoader = () => <Facebook />

    return <div className="c-container">
      <Navbar changeWeather = {this.changeWeather} changeRegion={this.change} />
      {this.state.loading ? (
        <div className="c-container__loader">
          <MyFacebookLoader />
        </div>
      ) : (
        <WeatherMain weatherData = {this.state.data} />
      )}
    </div>
  }
}

export default Index