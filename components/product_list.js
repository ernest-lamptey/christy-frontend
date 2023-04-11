import { PureComponent } from "react";
import ProductCard from "./product_card";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList() {
    const { data, error } = useSWR('http://localhost:5000/api/v1/items', fetcher);

    // create array to store selected items by using array methods to add and delete(filter)
    // write a function that will check if item are already and array and remove them or add if they are not there and pass down to children as props

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <>
            <h2 className="text-xl font-bold my-2">Shop Vegetables</h2>
            <main className="m-auto grid grid-cols-3 gap-2 max-h-[65vh] overflow-scroll">
                {data && data.map(item => (
                    <ProductCard key={item._id} product={item}/>
                ))}
            </main>
        </>
    )
  }