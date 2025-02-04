import React from 'react'

const Search = ({search, setSearch}) => (

    <div className="search">
        <h2>Pesquisa</h2>
        <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Digite para Pesquisar...'
            />
    </div>

);

export default Search