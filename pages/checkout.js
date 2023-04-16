import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"


export default function Checkout() {
    const router = useRouter()
    const [toggleForm, setToggleForm] = useState(false)
    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [provider, setProvider] = useState("mtn")
    const totalAmount = Number(router.query.amount)

    //mtn goes straight to make request
    const handlePayment = () => {
        axios.post('http://localhost:5000/api/v1/pay', {email, phone, provider, totalAmount})
            .then((response) => console.log(response))
            .catch(error => console.log(error))
    }

    //this is just for airtel and vodafone
    const handleOTP = (e) => {
        e.preventDefault()
        console.log(top)
        setToggleForm(false)
    }


    return (
        <div className="p-4">
            <h2 className="text-2xl text-center font-bold my-2">Payment</h2>
            { !toggleForm && 
                <form className="bg-orange-50 shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                    <div className="text-center">
                        <span className="font-semibold">Amount to pay</span>
                        <p className="text-3xl font-bold p-2 mb-2">GHS {totalAmount.toFixed(2)}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email (for receipt)
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
                        <button onClick={handlePayment} className="bg-orange-300 w-full hover:bg-orange-400 font-bold py-2 px-4 rounded-md" type="button">
                        Submit
                        </button>
                    </div>
                </form>
            }

            { toggleForm && 
                <form onSubmit={handleOTP} className="bg-orange-50 shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-center text-lg font-semibold mb-4">Confirmation Code</h1>
                    <div className="mb-4">
                        <input value={otp} onChange={(e) => setOtp(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter the code"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-orange-300 w-full hover:bg-orange-400 font-bold py-2 px-4 rounded-md" type="submit">
                        Submit
                        </button>
                    </div>
                </form>
            }
            

        </div>
    )
  } 