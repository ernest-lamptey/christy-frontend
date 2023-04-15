import { useState } from "react"
import { useRouter } from "next/router"

export default function Checkout() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [provider, setProvider] = useState("mtn")
    const amount = Number(router.query.amount)

    const handleSubmit= (e) => {
        e.preventDefault()
        console.log(email, phone, provider, amount)
    }

    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold">Checkout Page</h3> 
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-center text-3xl font-semibold">GHS {amount.toFixed(2)}</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                    </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                    Phone
                    </label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="network">
                    Network
                    </label>
                    <div className="relative">
                    <select value={provider} onChange={(e) => setProvider(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="network">
                        <option value="mtn">MTN</option>
                        <option value="vod">Vodafone</option>
                        <option value="tgo">AirtelTigo</option>
                    </select>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                    </button>
                </div>
            </form>

        </div>
    )
  } 