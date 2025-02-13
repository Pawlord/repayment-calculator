import { useState, forwardRef } from 'react';
import clsx from 'clsx';

// Стили
import './ui-input.scss';

export const UiInput = forwardRef(({ direction = 'left', icon, inputType, labelText, errors, name, register, validationInput, ...props }, ref) => {

    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = () => {
        setIsFocus(true);
    }

    const handleBlur = (e) => {
        setIsFocus(false);
        props.onBlur && props.onBlur(e);
    }

    return (
        <label className='input-label'>
            {labelText}
            <div className={clsx('input-container', isFocus && 'input-focus', errors[name] && 'input-error')}>
                {
                    direction === 'left'
                        ? (
                            <>
                                <span className={clsx('icon icon-left', isFocus && 'icon-focus', errors[name] && 'icon-error')}>{icon}</span>
                                <input
                                    ref={ref}
                                    name={name}
                                    className='input'
                                    type={inputType}
                                    pattern="^[^.,]*[.,]?[^.,]*$"
                                    {...register(name, { validate: validationInput })}
                                    {...props}
                                    onFocus={handleFocus}
                                    onBlur={e => handleBlur(e)}
                                />
                            </>
                        )
                        : (
                            <>
                                <input
                                    ref={ref}
                                    name={name}
                                    {...props}
                                    className='input'
                                    pattern="^[^.,]*[.,]?[^.,]*$"
                                    type={inputType}
                                    {...register(name, { validate: validationInput })}
                                    onFocus={handleFocus}
                                    onBlur={e => handleBlur(e)}
                                />
                                <span className={clsx('icon icon-right', isFocus && 'icon-focus', errors[name] && 'icon-error')}>{icon}</span>
                            </>
                        )

                }
            </div>
            {errors[name] && <p className='error-message'>{errors[name].message}</p>}
        </label>
    )
})