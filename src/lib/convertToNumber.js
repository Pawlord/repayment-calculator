export function convertToNumber(stringValue) {
    stringValue = stringValue.trim();
    var result = stringValue.replace(/[^0-9]/g, '');
    if (/[,\.]\d{2}$/.test(stringValue)) {
        result = result.replace(/(\d{2})$/, '.$1');
    }
    return parseFloat(result);

}