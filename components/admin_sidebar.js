import Link from "next/link"

export default function AdminSideBar() {
    return (
        <div className="w-1/6 min-h-screen bg-white p-2">
            <h1 className="text-xl w-full font-bold mb-6 text-center">Foodie Express Admin</h1>
            <div className="flex w-full flex-col gap-4">
                <Link className="w-full border-b-2 bg-slate-100 focus:bg-orange-300 hover:cursor-pointer hover:border-orange-300 p-2" href={"/admin/dashboard"}>
                    <span className='w-full font-medium p-2'>Dashboard</span>
                </Link>
                <Link className="w-full border-b-2 bg-slate-100 focus:bg-orange-300 hover:cursor-pointer hover:border-orange-300 p-2" href={"/admin/items"}>
                    <span className='w-full font-medium p-2'>Items</span>
                </Link>
                <Link className="w-full border-b-2 bg-slate-100 focus:bg-orange-300 hover:cursor-pointer hover:border-orange-300 p-2" href={"/admin"}>
                    <span className='w-full font-medium p-2'>Logout</span>
                </Link>
            </div>
        </div>
    )
  }