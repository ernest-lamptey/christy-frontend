import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from 'axios'

export default function Admin() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const register = () => {
    axios.post('http://localhost:5000/api/v1/admin/register', { email, password })
      .then((res) => {
        console.log(res)
        router.push('/admin/dashboard')
      })
      .catch((error) => {
        console.log(error)
      })
    }

    const login = () => {
      axios.post('http://localhost:5000/api/v1/admin/login', { email, password })
      .then((res) => {
        console.log(res)
        router.push('/admin/dashboard')
      })
      .catch((error) => {
        console.log(error)
      })
    }

    return (
      <main className="flex items-center justify-center min-h-screen m-2">
        <div className="w-72 flex-col justify-center">
          <label className="text-semibold">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} className="h-10 w-full rounded-md p-2 mb-1 bg-orange-50"  type="email"/>
          <label className="text-semibold">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className="h-10 w-full rounded-md p-2 mb-1 bg-orange-50" type="password"/>
          <button onClick={login} className="h-10 w-full my-2 rounded-md font-semibold bg-orange-200 hover:bg-orange-300">Sign In</button>
          <button onClick={register} className="h-10 w-full my-2 rounded-md font-semibold border border-orange-300 hover:bg-orange-300">Create Account</button>
        </div>
      </main>
    )
  }