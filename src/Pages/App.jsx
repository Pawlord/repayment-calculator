// Компоненты
import { MainLayout } from "@/layouts"
import { CalculateSide, ResultSide } from "@/components"

export const App = () => {
    return (
        <MainLayout left={<CalculateSide />} right={<ResultSide />} />
    )
}
