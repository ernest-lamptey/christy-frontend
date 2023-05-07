import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Admin() {
  const { data, error } = useSWR('http://localhost:5000/api/v1/orders', fetcher);
    
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

    return (
      <main className="flex flex-col gap-8 items-center justify-center min-h-screen bg-orange-100">
        <h1 className="text-4xl font-bold">Foodie Express Admin</h1>
          <table className="text-left text-lg w-full">
              <thead className="bg-orange-100" >
                  <tr className="border-b">
                  <th className="p-2">Id</th>
                  <th className="p-2">Payment Status</th>
                  <th className="p-2">Order Status</th>
                  <th className="p-2">Total Amount</th>
                  </tr>
              </thead>
              <tbody className="text-lg">
                  {data && data.map((order) => (
                  <tr className="border-b" key={order._id}>
                      <td className="p-2">{order._id}</td>
                      <td className="p-2">{order.paymentStatus}</td>
                      <td className="p-2">{order.orderStatus}</td>
                      <td className="p-2">{order.totalAmount.toFixed(2)}</td>
                  </tr>
                  ))}
              </tbody>
          </table>
      </main>
    )
  }