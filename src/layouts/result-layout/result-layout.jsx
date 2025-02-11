// Стили
import './result-layout.scss';

export const ResultLayout = ({ resultTitle, resultCard, resultEmpty }) => {
    return (
        <div className='result-container'>
            {resultEmpty}
            {resultTitle}
            {resultCard}
        </div>
    )
}