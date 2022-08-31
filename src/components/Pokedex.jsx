import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PokemonCard from './pokedex/PokemonCard'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState(null)

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/pokemon'
        axios.get(URL)
            .then(res => setPokemons(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <PokedexContainer>
            {
                pokemons?.results.map(item => (
                    <PokemonCard key={item.url} url={item.url} />
                ))
            }
        </PokedexContainer>
    )
}
const PokedexContainer = styled.section`
    border: 1px solid red;
    background-color: blue;
`
export default Pokedex