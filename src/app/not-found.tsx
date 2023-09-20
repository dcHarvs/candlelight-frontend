import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="p-4 flex flex-col">
      <p className="text-2xl font-bold">Page Not Found</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
