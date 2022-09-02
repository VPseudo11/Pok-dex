import React from 'react'

const SearchInput = ({ setPokeSearch }) => {

    const handleSubmit = e => {
        e.preventDefault()
        setPokeSearch(e.target.search.value.trim().toLowerCase())
        e.target.search.value = ''
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id='search' type="text" />
            <button>Search</button>
        </form>
    )
}

export default SearchInput