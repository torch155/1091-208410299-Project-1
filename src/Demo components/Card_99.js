import React from 'react'

const Card = ({ name, username, img }) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={img} width="300" alt='Intro' />
            <h2>{name}</h2>
            <p>{username}</p>
        </div>
    )
}

export default Card;