import React from 'react'

const StatsPokemon = ({infoStat}) => {
    return (
        <li>
            <h4>{infoStat.stat.name}</h4>
            <h5>{infoStat['base_stat']}</h5>
        </li>
    )
}

export default StatsPokemon