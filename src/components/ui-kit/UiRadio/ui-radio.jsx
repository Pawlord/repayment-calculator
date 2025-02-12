import { forwardRef } from 'react';
import clsx from 'clsx';

// Стили
import './ui-radio.scss';

export const UiRadio = forwardRef(({ labelText, value, checkedRadio, ...props }, ref) => {

    const isChecked = checkedRadio === value;

    return (
        <label className={clsx('radio', isChecked && 'selected-radio')} htmlFor={value}>

            <input
                ref={ref}
                type='radio'
                className='radio__input'
                id={value}
                value={value}
                {...props}
            />
            <span className='radio__custom' />

            {labelText}
        </label>
    )
})