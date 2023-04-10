import ActionCard from "@/components/action_card";
import ProductList from "@/components/product_list";
import { useRouter } from 'next/navigation';

export default function Products() {
    const router = useRouter()

    const navigateToCart = () => {
        router.push('/cart')
    }

    return (
        <div>
            <ActionCard navigate={navigateToCart} buttonText="View Cart" />
            <ProductList />
        </div>
    )
  }