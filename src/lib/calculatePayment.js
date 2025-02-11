export function calculatePayment(mortgageAmount, mortgageTerm, interestRate) {
    // 1. Вычисляем месячную процентную ставку
    const monthlyInterestRate = interestRate / 12 / 100;

    // 2. Вычисляем количество платежей
    const numberOfPayments = mortgageTerm * 12;

    // 3. Вычисляем ежемесячный платеж
    const monthlyPayment =
        mortgageAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment.toFixed(2);
}