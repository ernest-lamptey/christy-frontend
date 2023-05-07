import { useState } from "react"
import { useRouter } from "next/router"
import { usePaystackPayment } from 'react-paystack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Checkout() {
    const router = useRouter()
    const [toggleForm, setToggleForm] = useState(false)
    const [email, setEmail] = useState('')
    const totalAmount = Number(router.query.amount)

    // const handleOTP = (e) => {
    //     e.preventDefault()
    //     console.log(top)
    //     setToggleForm(false)
    // }

    const config = {
        reference: router.query.order_id,
        email: email,
        currency: "GHS",
        amount: totalAmount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_live_cc377f9358bf9a74f35c6b4b0a0946dac1e4df1b',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
  
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          <div>
              <button className="p-2 rounded-md bg-orange-300 font-semibold w-full" onClick={() => {
                  if (email == ''){
                    toast('Email must be added')
                    return
                  }
                  initializePayment(onSuccess, onClose)
              }}>Pay</button>
          </div>
        );
    };


    return (
        <div>
            <h2 className="text-2xl text-center font-bold my-2">Payment</h2>
            <div className="w-80 flex flex-col gap-3 mx-auto rounded-md bg-orange-50 p-4 justify-center">
                <form className="flex flex-col gap-3">
                <p className="text-3xl font-bold p-2 mb-2 text-center">GHS {totalAmount.toFixed(2)}</p>
                    <label className="font-medium">Email</label>
                    <input type="email" className="h-10 -mt-3 border border-slate-300 rounded-md pl-2" onChange={(e) => setEmail(e.target.value)} placeholder="user@example.com" value={email}/>
                    
                </form>
                <PaystackHookExample />
            </div>
            <ToastContainer />
        </div>
    )
  } 