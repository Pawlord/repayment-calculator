import React from 'react'

// Стили 
import './result-title.scss';

export const ResultTitle = () => {
    return (
        <>
            <h2 className="result-title">
                Your results
            </h2>
            <p className='result-desc'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayment" again.</p>
        </>
    )
}