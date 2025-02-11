import { useContext } from 'react'
import { useForm } from 'react-hook-form';

// Комопненты
import { CalculateLayout } from '@/layouts'
import { CalculateTitle, ClearButton, UiInput, UiRadio, CalculateButton } from '@components';

// Функции
import { calculatePayment, convertNumberFormat, convertToNumber, calculateTotalRepayment } from '@/lib';

// Контекст
import { PaymentContext } from '@/context/payment-context';

export const CalculateSide = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const { handleCalculateResult } = useContext(PaymentContext)

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

    return (
        <CalculateLayout
            title={<CalculateTitle />}
            clearButton={<ClearButton />}
            errors={errors}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            amountInput={<UiInput icon={'£'} inputType={'text'} labelText={'Mortgage amount'} {...register('mortgageAmount', { required: true })} errors={errors} />}
            termInput={<UiInput icon={'years'} inputType={'text'} labelText={'Mortgage term'} direction='right' {...register('mortgageTerm', { required: true })} errors={errors} />}
            intRateInput={<UiInput icon={'%'} inputType={'text'} labelText={'Interest Rate'} direction='right' {...register('interestRate', { required: true })} errors={errors} />}
            radioTitle={'Mortgage type'}
            radioRepayment={
                <UiRadio
                    labelText='Repayment'
                    value={'repayment'}
                    {...register('mortgageCategory', { required: true })}
                />
            }
            radioInterest={
                <UiRadio
                    labelText={'Interest only'}
                    value={'interest'}
                    {...register('mortgageCategory', { required: true })}
                />
            }
            calculateButton={<CalculateButton />}
        />
    )

}


