import React from 'react'
import './cardsaga.css'

function Cardsaga({users}) {
    return (
        <div className='card'>
            <div className='card-inner'>
            <div className="inner-card">
                <img src={users.picture.medium} alt=""/>
            </div>
            <div className="card-name">
                {users.name.first} {users.name.last}
            </div>
            <div className="card-email">
                {users.email}
            </div>
            <div className="card-cell">
                {users.cell}
            </div>
            </div>
        </div>
    )
}

export default Cardsaga
