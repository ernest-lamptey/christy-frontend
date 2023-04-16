import Image from "next/image"
import { useState, useContext, useEffect } from "react";
import { OrderContext } from "@/contexts/OrderContext";
import { capitalize } from "@/utils/utils";

export default function ProductCard({product, addOrRemoveItem}) {
    const { orders, setOrders } = useContext(OrderContext)
    const [selected, setSelected] = useState(false)
    
    const toggleSelection = () => {
      setSelected(!selected)
    }

    const setItem = () => {
      toggleSelection()
      addOrRemoveItem(product)
    }

    useEffect(() => {
      if (orders.includes(product)) toggleSelection()
    }, [])
    
    return (
      <main onClick={setItem} className={`p-1 border rounded-md ${selected ? 'bg-orange-300': ''}`}>
        <Image
            className="rounded-md object-cover" 
            src={product.photoUrl}
            width={180}
            height={120}
            alt={product.name}
        />
        <h3 className="text-lg  text-slate-700 font-bold">{capitalize(product.name)}</h3>
        <p className="font-medium -mt-1">from <span className="font-bold">GHS {product.price.toFixed(2)}</span></p>
      </main>
    )
  }