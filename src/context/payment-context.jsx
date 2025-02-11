import React, { createContext, useState } from 'react';

export const PaymentContext = createContext(0);

export const PaymentContextProvider = ({ children }) => {

    const [resultPayment, setResultPayment] = useState({
        monthlyPayment: 0,
        totalRepayment: 0,
    })

    const handleCalculateResult = (monthlyPayment, totalRepayment) => {
        setResultPayment({
            ...resultPayment,
            monthlyPayment,
            totalRepayment,
        })
    }

    const value = {
        resultPayment,
        handleCalculateResult,
    }

    return (
        <PaymentContext.Provider value={value}>
            {children}
        </PaymentContext.Provider>
    )
}