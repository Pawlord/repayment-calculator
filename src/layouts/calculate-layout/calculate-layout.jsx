import React from 'react'
import { useForm } from 'react-hook-form';

// Стили
import './calculate-layout.scss';

export const CalculateLayout = ({ title, clearButton, amountInput, termInput, intRateInput, radioTitle, radioRepayment, radioInterest, calculateButton, onSubmit, handleSubmit, errors }) => {

    return (
        <div className='calculate-container'>
            <div className='calculate__header'>
                {title}
                {clearButton}
            </div>

            <form className="input-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <div className="amount-container">
                    {amountInput}
                </div>

                <div className="term-container">
                    {termInput}
                </div>

                <div className="interest-rest-container">
                    {intRateInput}
                </div>

                <div className="radio-wrapper">
                    <h3 className="radio-title">{radioTitle}</h3>
                    {radioRepayment}
                    {radioInterest}
                    {errors[radioRepayment.props.name] && <p className='error-message'>This field is required</p>}
                </div>

                <div className="calculate-button-container">
                    {calculateButton}
                </div>
            </form>
        </div>
    )
}