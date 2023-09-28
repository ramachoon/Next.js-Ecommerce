import Logo from "@/components/ui/Logo"
import SearchBar from "@/components/ui/SearchBar"
import HeaderSinginBtn from "@/components/ui/HeaderSinginBtn"
import HeaderCartBtn from "@/components/ui/HeaderCartBtn"

export default function Header() {
  return (
    <div className="h-24 border-b border-default">
      <div className="container h-full flex justify-between items-center">

        {/* Logo area */}
        <div>
          <Logo />
        </div>

        {/* Searchbar area */}
        <div>
          <SearchBar />
        </div>

        {/* Cart & Signin */}
        <div className="h-full flex items-center gap-1.5">
          <HeaderCartBtn />
          <HeaderSinginBtn />
        </div>

      </div>
    </div>
  )
}