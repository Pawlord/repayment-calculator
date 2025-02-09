import React, { useState } from 'react'

// Комопненты
import { CalculateLayout } from '@/layouts'
import { CalculateTitle, ClearButton, UiInput, UiRadio, CalculateButton } from '@components';

export const CalculateSide = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const onChange = (value) => {
        setSelectedValue(value);
    }

    return (
        <CalculateLayout
            title={<CalculateTitle />}
            clearButton={<ClearButton />}
            amountInput={<UiInput icon={'£'} inputType={'text'} labelText={'Mortgage amount'} />}
            termInput={<UiInput icon={'years'} inputType={'text'} labelText={'Mortgage term'} direction='right' />}
            intRateInput={<UiInput icon={'%'} inputType={'text'} labelText={'Interest Rate'} direction='right' />}
            radioTitle={'Mortgage type'}
            radioRepayment={
                <UiRadio
                    labelText='Repayment'
                    radioName={'mortgage-category'}
                    value={'repayment'}
                    onChange={onChange}
                    selected={selectedValue === 'repayment'}
                />
            }
            radioInterest={
                <UiRadio
                    labelText={'Interest only'}
                    radioName={'mortgage-category'}
                    value={'interest'}
                    onChange={onChange}
                    selected={selectedValue === 'interest'}
                />
            }
            calculateButton={<CalculateButton />}
        />
    )
}