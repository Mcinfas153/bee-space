import React, { useState, useEffect } from 'react'
import WeatherBox from './WeatherBox'
import { wetherApiKey } from '../config/apiKey'
import axios from 'axios'

export default function Home() {

    const [city, setCity] = useState([])

    useEffect(() => {
        async function fetchCity(latitude, longitude) {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${wetherApiKey}&units=metric`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    setCity(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

        function fetchWeather() {
            navigator.geolocation.getCurrentPosition(async function (position) {
                fetchCity(position.coords.latitude, position.coords.longitude)
            })
        }

        fetchWeather()
    }, [])

    return (
        <div className=''>
            <WeatherBox info={city} />
        </div>
    )
}
