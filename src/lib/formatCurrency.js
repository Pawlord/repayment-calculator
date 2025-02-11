export function formatCurrency(number, currency = 'GBP', locale = 'en-GB') {
    return number.toLocaleString(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}