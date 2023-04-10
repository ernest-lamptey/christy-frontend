import ProductCard from "./product_card";

export default function ProductList() {
    return (
        <>
            <h2 className="text-xl font-bold my-2">Shop Vegetables</h2>
            <main className="m-auto grid grid-cols-3 gap-2">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </main>
        </>
    )
  }