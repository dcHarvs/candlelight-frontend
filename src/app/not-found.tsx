import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center box-border gap-2">
      <p className="text-[12rem] font-extrabold text-neutral-300 spacing tracking-tighter leading-none">404</p>
      <span>Page not found. <Link href="/" className="text-blue-600">Return Home</Link></span>
    </div>
  )
}
