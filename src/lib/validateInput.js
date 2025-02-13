export const validateInput = (value) => {
    if (value.trim() === '') {
        return 'This field is required';
    }

    const count = (value.split('.').length - 1) + (value.split(',').length - 1);
    if (count > 1) {
        return 'Incorrect format';
    }

    const regex = /^[0-9.,]+$/;
    if (!regex.test(value.trim())) {
        return 'Only numbers and , .';
    }

    if (value[0] === '.' || value[0] === ',') {
        return 'Must start with a number'
    }
    return true;
};