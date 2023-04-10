import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center h-screen bg-orange-100">
      <h1 className="text-4xl font-bold">Foodie Express</h1>
      <Image
        className="aspect-square object-contain" 
        src="/../public/images/paper_bag.png"
        width={250}
        height={250}
        alt="paper bag with vegetables"
      />
      <Link href={"/products"}>
      <button
          className="rounded-md py-2 px-4 text-xl bg-orange-300 font-bold hover:bg-orange-400">Click here to start</button>
      </Link>
    </main>
  )
}
