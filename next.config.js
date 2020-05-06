const withSass = require('@zeit/next-sass')

require("dotenv").config()

module.exports = withSass({
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY
  }
})