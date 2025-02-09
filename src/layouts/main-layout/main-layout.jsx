// Стили
import './main-layout.scss';

export const MainLayout = ({ left, right }) => {
    return (
        <div className="main-layout">
            <div className="left-side">
                {left}
            </div>

            <div className="right-side">
                {right}
            </div>
        </div>
    )
}