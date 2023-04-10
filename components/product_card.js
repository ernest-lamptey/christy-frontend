import Image from "next/image"

export default function ProductCard({product}) {
    return (
      <main className="p-1 border rounded-md">
        <Image
            className="rounded-md aspect-square object-cover" 
            src={product.photoUrl}
            width={120}
            height={120}
            alt={product.name}
        />
        <h3 className="font-bold">{product.name.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}</h3>
        <p>from GHS {product.price.toFixed(2)}</p>
      </main>
    )
  }