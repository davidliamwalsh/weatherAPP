import { Component } from 'react'
import Axios from 'axios'
import Layout from '../components/Layout'

class Index extends Component {

  state = {
    coords: {
      latitude: 45,
      longitude: 60
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
        Axios.get(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
          console.log(res)
        })

      })
    } else {
      console.log('error')
    }
  }

  render () {
    return <Layout>
      <p></p>
    </Layout>
  }
}

export default Index