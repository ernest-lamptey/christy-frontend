import ActionCard from "@/components/action_card"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import { OrderContext } from "@/contexts/OrderContext"
import axios from "axios"

export default function Cart() {
    const { orders, setOrders } = useContext(OrderContext)
    const router = useRouter()

    const orderToFormData = (order) => {
        return {_id: order._id, name: order.name, purchaseAmount: order.value}
    }

    const navigateToPayment = () => {
        console.log(formData)
        axios.post('http://localhost:5000/api/v1/orders', {items: formData})
            .then((response) => {
                console.log(response.data)
                router.push({
                    pathname: '/checkout',
                    query: { order_id: response.data._id, 
                            amount: response.data.totalAmount
                        }
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const [formData, setFormData] = useState(() => {
        return orders.map(order => {
            order.value = order.price;
            return orderToFormData(order)
        })
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        // Submit the form data here to create order
    };

    const handleInputChange = (event, order) => {
        const value = event.target.value ? parseFloat(event.target.value) : 0
        order.value = Number(value.toFixed(2))
        setFormData([...formData.filter(data => data._id != order._id), orderToFormData(order)])
    };

    return (
        <div className="p-4">
            <ActionCard navigate={navigateToPayment} buttonText="Checkout"/>
            <div className="max-w-md mx-auto my-8 max-h-[65vh] overflow-scroll">
                <form  className="shadow-md rounded">
                    <table className="text-left text-lg w-full">
                        <thead className="bg-orange-100" >
                            <tr className="border-b">
                            <th className="p-2">Name</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-lg">
                            {orders && orders.map((order) => (
                            <tr className="border-b" key={order._id}>
                                <td className="p-2">{order.name}</td>
                                <td className="p-2">{order.price.toFixed(2)}</td>
                                <td className="p-2">
                                <input
                                    type="number"
                                    // value={formData.find((f) => f.id === order._id)?.value || ''}
                                    onBlur={(event) => handleInputChange(event, order)}
                                    className="bg-gray-100 focus:bg-white focus:outline-none rounded py-2 px-3 w-20 transition duration-300 ease-in-out"
                                    defaultValue={order.price.toFixed(2)}
                                    min={order.price} //work more this validation
                                />
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2" className="text-right py-2 font-medium">
                                    Total: 
                                </td>
                                <td className="py-2 font-medium">
                                    {formData.reduce((acc, curr) => acc + Number(curr.purchaseAmount), 0).toFixed(2)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
        </div>
    )
  }