import Image from "next/image"
import { useState } from "react"

export default function ProductCard({product}) {
    const [selected, setSelected] = useState(false)
    
    const toggleSelection = () => {
      setSelected(!selected)
    }
    
    return (
      <main onClick={toggleSelection} className={`p-1 border rounded-md ${selected ? 'bg-orange-300': ''}`}>
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