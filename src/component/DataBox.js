import React from 'react'
import NumberFormat from 'react-number-format';

export default function DataBox(props) {

    const { value, text, background } = props;

    return (
        <div className={`${background} bg-no-repeat bg-left flex items-center py-3 px-5 gap-5 rounded-lg h-24`}>
            <p className='text-white font-bold tracking-wide text-3xl'><NumberFormat value={value} displayType={'text'} thousandSeparator={true} /></p>
            <p className='text-white text-lg tracking-widest uppercase font-semibold'>{text}</p>
        </div>
    )
}
