import React from 'react'

// Стили
import './result-card.scss';

export const ResultCard = ({ mountlyPayment, totalRepayment }) => {
    return (
        <div className='result-card'>
            <p className="result-card__title">Your monthly repayments</p>
            <p className="result-card__mounthly-price">£{mountlyPayment}</p>
            <div className="result-card__divide-line"></div>
            <p className="result-card__subdesc">Total you'll repay over the term</p>
            <p className="result-card__total-price">{totalRepayment}</p>
        </div>
    )
}