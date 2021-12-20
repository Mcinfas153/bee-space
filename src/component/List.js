import React, { useEffect, useState } from 'react'
import DataBox from './DataBox'
import axios from 'axios'

export default function List() {

    const [knownCount, setKnownCount] = useState([])

    useEffect(() => {

        function fetchObjects() {
            axios.get('https://api.le-systeme-solaire.net/rest/knowncount')
                .then(function (response) {
                    // handle success
                    //console.log(response.data.knowncount);
                    setKnownCount(response.data.knowncount);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

        fetchObjects()

    }, [])

    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <DataBox value={knownCount[0]?.knownCount} text={knownCount[0]?.id} background="bg-[url('../img/planet-banner.jpg')]" />
                <DataBox value={knownCount[1]?.knownCount} text={knownCount[1]?.id} background="bg-[url('../img/dwarf-planet.jpg')]" />
                <DataBox value={knownCount[4]?.knownCount} text={knownCount[4]?.id} background="bg-[url('../img/moon.jpg')]" />
                <DataBox value={knownCount[3]?.knownCount} text={knownCount[3]?.id} background="bg-[url('../img/comet-banner.jpg')]" />
                <DataBox value={knownCount[2]?.knownCount} text={knownCount[2]?.id} background="bg-[url('../img/astroid.png')]" />
            </div>
        </div>
    )
}
