import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Admin() {
  const [password, setPassword] = useState('')
  const router = useRouter()

    const login = () => {
      console.log(password)
      router.push('/admin/dashboard')
    }

    return (
      <main className="flex items-center justify-center min-h-screen m-2 bg-orange-50">
        <div className="w-72 flex-col justify-center">
          <label className="text-semibold">Enter admin password</label>
          <input onChange={(e) => setPassword(e.target.value)} className="h-10 w-full rounded-md p-2" type="password"/>
          <button onClick={login} className="h-10 w-full my-2 rounded-md font-semibold bg-orange-200 hover:bg-orange-300">Sign In</button>
        </div>
      </main>
    )
  }