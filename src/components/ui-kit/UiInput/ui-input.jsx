import { useState, forwardRef } from 'react';
import clsx from 'clsx';

// Стили
import './ui-input.scss';

export const UiInput = forwardRef(({ direction = 'left', icon, inputType, labelText, onBlur, errors, ...props }, ref) => {

    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = () => {
        setIsFocus(true);
    }

    const handleBlur = (e) => {
        setIsFocus(false);
        onBlur && onBlur(e);
    }

    return (
        <label className='input-label'>
            {labelText}
            <div className={clsx('input-container', isFocus && 'input-focus', errors[props.name] && 'input-error')}>
                {
                    direction === 'left'
                        ? (
                            <>
                                <span className={clsx('icon icon-left', isFocus && 'icon-focus', errors[props.name] && 'icon-error')}>{icon}</span>
                                <input ref={ref} {...props} className='input' type={inputType} onFocus={handleFocus} onBlur={e => handleBlur(e)} />
                            </>
                        )
                        : (
                            <>
                                <input ref={ref} {...props} className='input' type={inputType} onFocus={handleFocus} onBlur={e => handleBlur(e)} />
                                <span className={clsx('icon icon-right', isFocus && 'icon-focus', errors[props.name] && 'icon-error')}>{icon}</span>
                            </>
                        )

                }
            </div>
            {errors[props.name] && <p className='error-message'>This field is required</p>}
        </label>
    )
})