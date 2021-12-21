import React, { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'
import NewsBox from './NewsBox'
import NewsBoxSk from './skelton/NewsBoxSk';
import { rapidKey } from '../config/apiKey'

export default function Test() {
    const style = {
        height: 30,
        border: "1px solid green",
        margin: 6,
        padding: 8
    };

    const [items, setItems] = useState(Array.from({ length: 20 }))

    const [news, setNews] = useState([])

    const options = {
        headers: {
            'x-rapidapi-host': 'space-news.p.rapidapi.com',
            'x-rapidapi-key': rapidKey
        }
    };

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

    return (
        <div>
            <InfiniteScroll
                dataLength={news.length}
                next={fetchNews()}
                hasMore={true}
                loader={<NewsBoxSk />}
            >
                {news.map((n, index) => <NewsBox key={index} title={n.title} url={n.url} />)}
            </InfiniteScroll>
        </div>
    )
}
