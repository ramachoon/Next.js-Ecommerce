import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="text-3xl text-black tracking-wider py-3 pr-4 pl-0 max-sm:py-0">
      <span className="font-normal">NEXTON</span>
    </Link>
  )
}
