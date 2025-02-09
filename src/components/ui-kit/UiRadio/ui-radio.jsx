// Стили
import './ui-radio.scss';

export const UiRadio = ({ labelText, radioName, value, onChange, selected }) => {

    const handleChange = () => {
        onChange(value)
    }

    return (
        <div className='radio' onClick={handleChange}>

            <input
                type='radio'
                className='radio__input'
                name={radioName}
                id={value}
                value={value}
                checked={selected}
                onChange={() => { }}
            />
            <span className='radio__custom' />

            <label className='radio__text' htmlFor={value}>{labelText}</label>
        </div>
    )
}