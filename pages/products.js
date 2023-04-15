import ActionCard from "@/components/action_card";
import ProductList from "@/components/product_list";
import { useRouter } from 'next/navigation';
import { useContext } from "react";
import { OrderContext } from "@/contexts/OrderContext";
import addOrRemoveOrder from "@/utils/utils";

export default function Products() {
    const { orders, setOrders } = useContext(OrderContext)
    const router = useRouter()

    const navigateToCart = () => {
        router.push('/cart')
    }

    function addOrRemove(item) {
        const newArray = addOrRemoveOrder(orders, item);
        setOrders(newArray);
        console.log(orders)
      } 

    return (
        <div className="p-4">
            <ActionCard navigate={navigateToCart} buttonText="View Cart" />
            <ProductList addOrRemoveItems={addOrRemove} />
        </div>
    )
  }