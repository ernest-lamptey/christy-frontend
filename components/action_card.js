export default function ActionCard({navigate, goBack, buttonText, step1, step2}) {
    return (
      <main className="rounded-md bg-orange-100 p-3">
        <h1 className="text-xl font-bold">1. {step1}</h1>
        <h1 className="text-xl font-bold mb-2">2. {step2}</h1>
        <div className="flex gap-4">
          <button onClick={() => goBack()} className="rounded-md py-2 px-4 text-xl font-bold border-2 border-orange-300 hover:bg-orange-300">Back</button>
          <button onClick={() => navigate()} className="rounded-md py-2 px-4 text-xl bg-orange-300 font-bold hover:bg-orange-400">{buttonText}</button>
        </div>
      </main>
    )
  }