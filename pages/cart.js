import ActionCard from "@/components/action_card"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import { OrderContext } from "@/contexts/OrderContext"

export default function Cart() {
    const { orders, setOrders } = useContext(OrderContext)
    const router = useRouter()

    const navigateToPayment = () => {
        // router.push('/checkout')
        console.log(formData)
    }

    const [formData, setFormData] = useState(() => {
        return orders.map(order => {
            order.value = 0;
            return order
        })
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        // Submit the form data here to create order
    };

    const handleInputChange = (event, order) => {
        const value = event.target.value ? event.target.value : 0
        order.value = parseFloat(value).toFixed(2)
        setFormData([...formData.filter(data => data._id != order._id), order])
        console.log(formData)
    };

    return (
        <div className="p-4">
            <ActionCard navigate={navigateToPayment} buttonText="Checkout"/>
            <div className="max-w-md mx-auto mt-8">
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
                                    defaultValue={0}
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
                                    {formData.reduce((acc, curr) => acc + Number(curr.value), 0).toFixed(2)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
        </div>
    )
  }