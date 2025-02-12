import React from 'react'

// Стили
import './clear-button.scss';

export const ClearButton = ({ onClick }) => {
    return (
        <button className='clear-button' onClick={onClick}>Clear all</button>
    )
}