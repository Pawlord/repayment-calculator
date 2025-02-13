export const validateInput = (value) => {
    if (value.trim() === '') {
        return 'This field is required';
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