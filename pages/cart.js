import ActionCard from "@/components/action_card"
import { useRouter } from "next/navigation"

export default function Cart() {
    const router = useRouter()

    const navigateToPayment = () => {
        router.push('/checkout')
    }

    return (
        <>
            <ActionCard navigate={navigateToPayment} buttonText="Checkout"/>
            <h3>Welcome to Cart</h3>
        </>
    )
  }