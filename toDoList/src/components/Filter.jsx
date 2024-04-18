import React from 'react'

const Filter = ({filter, setfilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) =>
                setfilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>

            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Cres")}>Cres</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter