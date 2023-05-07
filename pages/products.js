import ActionCard from "@/components/action_card";
import ProductList from "@/components/product_list";
import { useRouter } from 'next/navigation';
import { useContext } from "react";
import { OrderContext } from "@/contexts/OrderContext";
import { addOrRemoveOrder } from "@/utils/utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products() {
    const { orders, setOrders } = useContext(OrderContext)
    const router = useRouter()

    const navigateToCart = () => {
        if (orders.length < 1) {
            toast("No items selected")
            return
        }
        router.push('/cart')
    }

    const handleGoBack = () => {
        router.back()
    }

    function addOrRemove(item) {
        const newArray = addOrRemoveOrder(orders, item);
        setOrders(newArray);
        console.log(orders)
      } 

    return (
        <div className="p-4">
            <ActionCard navigate={navigateToCart} 
            goBack={handleGoBack}
            buttonText="View Cart" 
            step1="Add your items..."
            step2="Hit the cart to continue" />
            <ProductList addOrRemoveItems={addOrRemove} />
            <ToastContainer />
        </div>
    )
  }