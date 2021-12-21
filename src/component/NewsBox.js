import React from 'react'

export default function NewsBox(props) {

    const { title, url } = props

    return (
        <div className="bg-black px-3 py-5 bg-[url('../img/news-box.jpeg')] bg-cover bg-center rounded-lg flex flex-col items-stretch">
            <p className='text-white text-sm'>{title}</p>
            <a href={url} className='text-left text-white text-xs mt-2 self-end cursor-pointer'>Read More</a>
        </div>
    )
}
