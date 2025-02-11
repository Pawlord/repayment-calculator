import { useContext } from 'react';

// Компоненты
import { ResultLayout } from '@/layouts/result-layout/result-layout'
import { ResultTitle, ResultCard, ResultEmpty } from '@components'

// Контекст
import { PaymentContext } from '@/context/payment-context'

// Функции
import { formatCurrency } from '@/lib';

export const ResultSide = () => {

    const { resultPayment } = useContext(PaymentContext);

    const formatMonthlyPayment = formatCurrency(resultPayment.monthlyPayment);
    const formatTotalRepayment = formatCurrency(resultPayment.totalRepayment);

    return (
        <>
            {
                resultPayment.monthlyPayment === 0
                    ? <ResultLayout resultEmpty={<ResultEmpty />} />
                    : <ResultLayout resultTitle={<ResultTitle />} resultCard={<ResultCard mountlyPayment={formatMonthlyPayment} totalRepayment={formatTotalRepayment} />} />
            }
        </>
    )
}

export default ResultSide