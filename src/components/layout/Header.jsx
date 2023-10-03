import Logo from "@/components/ui/Logo"
import SearchBar from "@/components/SearchBar"
import HeaderSinginBtn from "@/components/ui/HeaderSinginBtn"
import HeaderCartBtn from "@/components/ui/HeaderCartBtn"

export default function Header() {
  return (
    <header className="h-24 border-b border-default max-sm:h-36">
      <div className="container h-full flex justify-between items-center flex-wrap">

        {/* Logo area */}
        <div className="order-1 max-sm:order-1 text-black">
          <Logo />
        </div>

        {/* Searchbar area */}
        <div className="max-sm:w-full order-2 max-sm:order-3">
          <SearchBar />
        </div>

        {/* Cart & Signin */}
        <div className="flex items-center gap-1.5 order-3 max-sm:order-2">
          <HeaderCartBtn />
          <HeaderSinginBtn />
        </div>

      </div>
    </header>
  )
}