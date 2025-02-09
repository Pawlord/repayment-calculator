// Стили
import './ui-input.scss';

export const UiInput = ({ direction = 'left', icon, inputType, labelText }) => {
    return (
        <label className='input-label'>
            {labelText}
            <div className='input-container'>
                {
                    direction === 'left'
                        ? (
                            <>
                                <span className="icon icon-left">{icon}</span>
                                <input className='input' type={inputType} />
                            </>
                        )
                        : (
                            <>
                                <input className='input' type={inputType} />
                                <span className="icon icon-right">{icon}</span>
                            </>
                        )

                }
            </div>
        </label>
    )
}