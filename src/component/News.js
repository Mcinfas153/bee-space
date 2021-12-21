import React, { useEffect, useState } from 'react'
import NewsBox from './NewsBox'
import axios from 'axios'
import NewsBoxSk from './skelton/NewsBoxSk'
import { rapidKey } from '../config/apiKey'

export default function News() {

    const [news, setNews] = useState([])

    const options = {
        headers: {
            'x-rapidapi-host': 'space-news.p.rapidapi.com',
            'x-rapidapi-key': rapidKey
        }
    };

    useEffect(() => {

        async function fetchNews() {
            await axios.get('https://space-news.p.rapidapi.com/news/guardian', options)
                .then(function (response) {
                    // handle success
                    //console.log(response);
                    setNews(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }

        fetchNews()
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {
                news.length !== 0 ? news.map((n, index) => <NewsBox key={index} title={n.title} url={n.url} />) : <NewsBoxSk />
            }

        </div>
    )
}
