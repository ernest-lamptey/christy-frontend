import Image from "next/image"

export default function ProductCard() {
    return (
      <main className="p-1 border rounded-md">
        <Image
            className="rounded-md" 
            src="/../public/images/vegetables/cabbage.jpg"
            width={120}
            height={120}
        />
        <h3 className="font-bold">Cucumber</h3>
        <p>from 5.00 ghs</p>
      </main>
    )
  }