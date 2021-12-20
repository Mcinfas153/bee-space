import React, { useEffect, useState } from 'react'
import _ from 'lodash'

export default function WeatherBox(props) {

    const [climate, setClimate] = useState('')

    const { info } = props
    const { main, weather } = info

    useEffect(() => {
        if (weather !== undefined) {
            setClimate(weather[0])
        }
    }, [info])

    return (
        <div className="bg-[url('../img/weather-box.jpg')] bg-cover bg-center rounded-lg py-5 px-5 flex flex-col place-content-center place-items-center">
            <p className='text-white text-xl'>{info?.name}</p>
            <p className='text-white text-6xl my-2'>{_.round(main?.temp)}°</p>
            <p className='text-white text-sm tracking-wider'>Feels Like {_.round(main?.feels_like)}°</p>
            <p className='text-white text-sm capitalize'>{climate.description}</p>
        </div>
    )
}
