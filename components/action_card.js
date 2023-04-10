export default function ActionCard({navigate, buttonText}) {
    return (
      <main className="rounded-md bg-orange-100 p-3">
        <h1 className="text-xl font-bold">Tap on an item to add to cart</h1>
        <p className="text-lg mb-2">You can edit quantities when you 
            go to your cart</p>
        <button onClick={() => navigate()}
          className="rounded-md py-2 px-4 text-xl bg-orange-300 font-bold hover:bg-orange-400">{buttonText}</button>
      </main>
    )
  }