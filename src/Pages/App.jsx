// Компоненты
import { MainLayout } from "@/layouts"
import { CalculateSide, ResultSide } from "@/components"

// Контекст
import { PaymentContextProvider } from "@/context/payment-context"

export const App = () => {
    return (
        <PaymentContextProvider>
            <MainLayout left={<CalculateSide />} right={<ResultSide />} />
        </PaymentContextProvider>
    )
}
