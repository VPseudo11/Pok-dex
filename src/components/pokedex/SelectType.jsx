import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const SelectType = ({ setTypeSelect }) => {
    const [listTypes, setListTypes] = useState(null)


    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/type/`
        axios.get(URL)
            .then(res => setListTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setTypeSelect(e.target.value)
    }

    return (
        <select onChange={handleChange}>
            <option value="All">All Pokemons</option>
            {
                listTypes?.map(item => (
                    <option key={item.url} value={item.name}>{item.name}</option>
                ))
            }
        </select>
    )
}

export default SelectType