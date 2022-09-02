import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState(null)
    const { name } = useParams()
    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {pokemon?.name}
            <h2>{pokemon?.id}</h2>
        </div>
    )
}

export default PokemonDetails