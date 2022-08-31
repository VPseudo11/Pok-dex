import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StatsPokemon from './StatsPokemon';

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState(null)

    const id = url.split('/');
    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id[id.length - 2]}`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(pokemon)
    return (
        <CardContainer>
            <header>
                <img src={pokemon?.sprites.other['official-artwork']["front_default"]} alt="" />
            </header>
            <section>
                <h3>{pokemon?.name}</h3>
                <ul>
                    {
                        pokemon?.types.map(item => (
                            <li key={item.type.url}>{item.type.name}</li>
                        ))
                    }
                </ul>
            </section>
            <footer>
                <ul>
                    {
                        pokemon?.stats.map(stat=>(
                            <StatsPokemon key={stat.stat.url} infoStat={stat} />
                        ))
                    }
                </ul>
            </footer>
        </CardContainer>
    )
}

const CardContainer = styled.article`
    
`

export default PokemonCard