import { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form';

// Комопненты
import { CalculateLayout } from '@/layouts'
import { CalculateTitle, ClearButton, UiInput, UiRadio, CalculateButton } from '@components';

// Функции
import { calculatePayment, convertNumberFormat, convertToNumber, calculateTotalRepayment, validateInput } from '@/lib';

// Контекст
import { PaymentContext } from '@/context/payment-context';

export const CalculateSide = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({ mode: 'onChange' });
    const { handleCalculateResult } = useContext(PaymentContext)

    const mortgageCategory = watch('mortgageCategory');

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);

    const onSubmit = (data) => {
        const numberData = Object.fromEntries(Object.entries(data).map(([key, value]) => {
            let convertedString = convertNumberFormat(value);
            if (!isNaN((convertedString))) {
                return [key, convertToNumber(convertedString)]
            } else {
                return [key, value];
            }
        }))

        const monthlyPayment = calculatePayment(numberData.mortgageAmount, numberData.mortgageTerm, numberData.interestRate);
        const totalRepayment = calculateTotalRepayment(monthlyPayment, numberData.mortgageTerm);

        handleCalculateResult(monthlyPayment, totalRepayment);
    }

    const handleClearAll = () => {
        reset();
        handleCalculateResult(0, 0);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            switch (e.target) {
                case input1Ref.current:
                    input2Ref.current.focus();
                    break;

                case input2Ref.current:
                    input3Ref.current.focus();
                    break;
            }
        }
    }

    return (
        <>
            <CalculateLayout
                title={<CalculateTitle />}
                clearButton={<ClearButton onClick={handleClearAll} />}
                errors={errors}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                amountInput={
                    <UiInput
                        icon='£'
                        inputType='text'
                        inputMode='numeric'
                        labelText='Mortgage amount'
                        name='mortgageAmount'
                        register={register}
                        validationInput={validateInput}
                        errors={errors}
                        ref={input1Ref}
                        onKeyDown={e => handleKeyDown(e)}
                    />
                }
                termInput={
                    <UiInput
                        icon='years'
                        inputType='text'
                        inputMode='numeric'
                        name='mortgageTerm'
                        labelText='Mortgage term'
                        direction='right'
                        register={register}
                        validationInput={validateInput}
                        errors={errors}
                        ref={input2Ref}
                        onKeyDown={e => handleKeyDown(e)}
                    />
                }
                intRateInput={
                    <UiInput
                        icon='%'
                        inputType='text'
                        inputMode='numeric'
                        name='interestRate'
                        labelText='Interest Rate'
                        direction='right'
                        register={register}
                        validationInput={validateInput}
                        errors={errors}
                        ref={input3Ref}
                        onKeyDown={e => handleKeyDown(e)}
                    />
                }
                radioTitle={'Mortgage type'}
                radioRepayment={
                    <UiRadio
                        labelText='Repayment'
                        value={'repayment'}
                        checkedRadio={mortgageCategory}
                        {...register('mortgageCategory', { required: true })}
                    />
                }
                radioInterest={
                    <UiRadio
                        labelText={'Interest only'}
                        value={'interest'}
                        checkedRadio={mortgageCategory}
                        {...register('mortgageCategory', { required: true })}
                    />
                }
                calculateButton={<CalculateButton />}
            />
        </>
    )

}


