import useSWR from 'swr'
import { useState } from "react"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  const { data, error } = useSWR('http://localhost:5000/api/v1/admin/orders', fetcher)
  const [searchQuery, setSearchQuery] = useState('')
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('')
  const [orderStatusFilter, setOrderStatusFilter] = useState('')
  const router = useRouter();
  const [selectedOrderStatus, setSelectedOrderStatus] = useState('')

  const handleOrderStatusChange = (e, orderId) => {
    const newStatus = e.target.value
    console.log(newStatus)
    axios.put('http://localhost:5000/api/v1/admin/order', {orderId: orderId, orderStatus: newStatus})
        .then((res) => {
            toast.success('Order status updated')
        })
        .catch((error) => {
            console.error(error)
            toast.error('Failed to update order status')
        })
        // .finally(() => {
        //     // router.reload()
        // })
  }
    
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

    return (
      <main className="flex flex-col gap-8 min-h-screen m-2 bg-orange-100">
        <h1 className="text-4xl font-bold">Foodie Express Admin</h1>
        <div className="flex gap-4 h-10">
            <div className="flex gap-2 items-center">
            <span>Search by ID</span>
                <input
                    className="py-1 px-2 rounded-md"
                    type="text"
                    placeholder="Search by ID"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="flex gap-2 items-center">
                <span>Payment Status</span>
                <select
                    className="py-1 px-2 rounded-md"
                    value={paymentStatusFilter}
                    onChange={(e) => setPaymentStatusFilter(e.target.value)}
                    >
                    <option value="">Filter by payment status</option>
                    <option value="pending">Unpaid</option>
                    <option value="paid">Paid</option>
                </select>
            </div>
            <div className="flex gap-2 items-center">
                <span>Order Status</span>
                <select
                    className="py-1 px-2 rounded-md"
                    value={orderStatusFilter}
                    onChange={(e) => setOrderStatusFilter(e.target.value)}
                    >
                    <option value="">Filter by payment status</option>
                    <option value="pending">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                </select>
            </div>
        </div>
        <table className="w-full">
            <thead>
                <tr className="bg-gray-100">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Payment Status</th>
                <th className="py-2 px-4">Order Status</th>
                <th className="py-2 px-4">Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {data
                .filter((order) => order._id.toString().includes(searchQuery))
                .filter((order) => order.paymentStatus.toString().includes(paymentStatusFilter))
                .filter((order) => order.orderStatus.toString().includes(orderStatusFilter))
                .map((order) => (
                <tr key={order._id} className="border-b">
                    <td className="py-2 px-4">{order.email}</td>
                    <td className="py-2 px-4">{order.paymentStatus}</td>
                    <td className="py-2 px-4">
                    <select
                        className="py-1 px-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        value={order.orderStatus}
                        onChange={(e) => handleOrderStatusChange(e, order._id)}
                        >
                        <option value="">-- Select --</option>
                        <option value="pending" selected={order.orderStatus === 'pending'}>
                        Processing
                        </option>
                        <option value="shipped" selected={order.orderStatus === 'shipped'}>
                        Shipped
                        </option>
                        <option value="delivered" selected={order.orderStatus === 'delivered'}>
                        Delivered
                        </option>
                    </select>
                    </td>
                    <td className="py-2 px-4">{order.totalAmount.toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <ToastContainer />
      </main>
    )
  }