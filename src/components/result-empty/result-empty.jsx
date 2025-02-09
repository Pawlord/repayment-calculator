import React from 'react'

// Компоненты
import { ResultEmptyIcon } from '@/icons/result-empty-icon';

// Стили
import './result-empty.scss';

export const ResultEmpty = () => {
    return (
        <div className='result-empty'>
            <ResultEmptyIcon />
            <h2 className="result-empty__title">Results shown here</h2>
            <p className="result-empty__desc">Complete the form and click "calculate repayments" to see what your monthly  repayments would be.</p>
        </div>
    )
}