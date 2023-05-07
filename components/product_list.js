import ProductCard from "./product_card";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList({addOrRemoveItems}) {
    const { data, error } = useSWR('http://localhost:5000/api/v1/items', fetcher);
    
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <>
            <h2 className="text-xl font-bold my-2">Shop Vegetables</h2>
            <main className="m-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 max-h-[70vh] overflow-y-auto">
                {data && data.map(item => (
                    <ProductCard key={item._id} product={item} addOrRemoveItem={addOrRemoveItems} />
                ))}
            </main>
        </>
    )
  }