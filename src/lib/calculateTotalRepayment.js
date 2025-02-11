export function calculateTotalRepayment(monthlyPayment, years) {
    const numberOfPayments = years * 12;
    const totalRepayment = monthlyPayment * numberOfPayments;
    return totalRepayment;
}