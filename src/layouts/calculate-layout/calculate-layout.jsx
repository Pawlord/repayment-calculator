import React from 'react'

// Стили
import './calculate-layout.scss';

export const CalculateLayout = ({ title, clearButton, amountInput, termInput, intRateInput, radioTitle, radioRepayment, radioInterest, calculateButton }) => {
    return (
        <div className='calculate-container'>
            <div className='calculate__header'>
                {title}
                {clearButton}
            </div>

            <div className="input-wrapper">
                <div className="amount-container">
                    {amountInput}
                </div>

                <div className="term-container">
                    {termInput}
                </div>

                <div className="interest-rest-container">
                    {intRateInput}
                </div>
            </div>

            <div className="radio-wrapper">
                <h3 className="radio-title">{radioTitle}</h3>
                {radioRepayment}
                {radioInterest}
            </div>

            <div className="calculate-button-container">
                {calculateButton}
            </div>
        </div>
    )
}