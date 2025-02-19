import React from 'react'

// Компоненты
import { CalculatorIcon } from '@/icons/calculator-icon'

// Стили
import './calculate-button.scss';

export const CalculateButton = () => {
    return (
        <button className='calculate-button'>
            <CalculatorIcon />
            Calculate repayments
        </button>
    )
}