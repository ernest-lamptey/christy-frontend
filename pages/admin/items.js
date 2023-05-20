import useSWR from 'swr'
import { useState } from "react"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AdminSideBar from '@/components/admin_sidebar';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Items() {
  const { data, error } = useSWR('http://localhost:5000/api/v1/admin/items', fetcher)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const router = useRouter();

  const handlePriceUpdate = (e, itemId) => {
    const price = e.target.value;
    e.target.value = ''
    axios.put('http://localhost:5000/api/v1/admin/item', {itemId: itemId, price: price})
        .then((res) => {
            toast.success('Order status updated')
        })
        .catch((error) => {
            console.error(error)
            toast.error('Failed to update order status')
        })
        .finally(() => {
            router.reload()
        })
  }
    
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

    return (
      <main className="flex gap-8 min-h-screen bg-slate-100">
        <AdminSideBar />
        <div className='pt-2'>
        <h1 className="text-2xl font-bold  mb-4">Items</h1>
            <div className="flex gap-4 h-10 mb-6">
                <div className="flex gap-2 items-center">
                <span>Search by name</span>
                    <input
                        className="py-1 px-2 rounded-md"
                        type="text"
                        placeholder="Search by item name eg. tomatoes"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <span>Filter by Category</span>
                    <select
                        className="py-1 px-2 rounded-md"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                        <option value="">Filter by category</option>
                        <option value="vegetables">Vegetables</option>
                    </select>
                </div>
            </div>
            <table className="w-full">
                <thead className='text-left'>
                    <tr className="bg-gray-100">
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                    .filter((item) => item.name.toString().includes(searchQuery))
                    .filter((item) => item.category.toString().includes(categoryFilter))
                    .map((item) => (
                    <tr key={item._id} className="border-b">
                        <td className="py-2 px-4">{item.name}</td>
                        <td className="py-2 px-4">
                            <input className='py-1 px-2' onBlur={(e) => handlePriceUpdate(e, item._id)} placeholder={item.price.toFixed(2)} />
                        </td>
                        <td className="py-2 px-4">{item.category}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <ToastContainer />
      </main>
    )
  }