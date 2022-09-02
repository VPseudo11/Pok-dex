import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PokemonCard from './pokedex/PokemonCard'
import Pikachu2 from './../assets/Pikachu_2.gif'
import { useSelector } from 'react-redux'
import SearchInput from './pokedex/SearchInput'
import SelectType from './pokedex/SelectType'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState(null)
    const [pokeSearch, setPokeSearch] = useState(null)
    const [typeSelect, setTypeSelect] = useState(null)

    const nameTrainer = useSelector(state => state.nameTrainer)

    useEffect(() => {
        let URL
        if (pokeSearch) {
           const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}/`
            const obj = {
                results: [
                    {
                        url
                    }
                ]
            }
            setPokemons(obj)
        } else {
            URL = `https://pokeapi.co/api/v2/pokemon/`
            axios.get(URL)
                .then(res => setPokemons(res.data))
                .catch((err) => console.log(err))
        }
    }, [pokeSearch])

    return (
        <PokedexContainer>
            <HeaderSection>
                <TitleStyles><span>Poké</span>dex</TitleStyles>
                <img src={Pikachu2} alt="" />
            </HeaderSection>
            <h2>Welcome {nameTrainer}, here you can find your favorite pokemon</h2>
            <SelectType setTypeSelect={setTypeSelect} />
            <SearchInput setPokeSearch={setPokeSearch} />
            <PokemonsContainer>
                {
                    pokemons?.results.map(item => (
                        <PokemonCard key={item.url} url={item.url} />
                    ))
                }
            </PokemonsContainer>
        </PokedexContainer>
    )
}
const PokedexContainer = styled.section`
    max-width: 1200px;
    width: 100%;
    &>h2{
        margin: 30px 0;
        font-size: 1rem;
        font-style: bold;
        font-weight: 500;
    }
`

const PokemonsContainer = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px auto;
`

const HeaderSection = styled.header`
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    &>img{
        width: 150px;
    }
`

const TitleStyles = styled.h1`
    font-size: 3rem;
    color: #DFE1E1;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
    border: 3px solid black;
    border-radius: 30px;
    background-color: #B5331C;
    text-align: center;
    &>span{
        color: #B5331C;
        background-color: #DFE1E1;
        border-radius: 27px;
    }
    
    @media (max-width: 768px){
        border-radius: 20px;
        font-size: 2.3rem;
        &>span{
            border-radius: 17px;
        }
    }
`
export default Pokedex