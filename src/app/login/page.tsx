
export default function Page() {
  return (
    <main className="max-w-md h-full m-auto flex flex-col justify-center">
      <div className="border shadow-lg rounded p-6 flex flex-col gap-2 justify-stretch">
        <p className="font-bold text-xl text-center mb-4">Login to Candlelight</p>
        <input className="rounded-md border p-2 outline-none" type="text" name="email" placeholder="Email or username" />
        <input className="rounded-md border p-2 outline-none" type="password" name="password" placeholder="password" />
        <button className="p-2 bg-green-600 text-white rounded-md">Login</button>
      </div>
    </main>
  )
}
