export function convertNumberFormat(numberString) {
    let cleanedString = numberString.trim();

    const convertNumber = cleanedString.replace(/,/g, '.')

    return convertNumber;
}