import React from 'react'

// Компоненты
import { CalculatorIcon } from '@/icons/calculator-icon'

// Стили
import './calculate-button.scss';

export const CalculateButton = ({ onClick }) => {
    return (
        <button className='calculate-button' onClick={onClick}>
            <CalculatorIcon />
            Calculate repayments
        </button>
    )
}