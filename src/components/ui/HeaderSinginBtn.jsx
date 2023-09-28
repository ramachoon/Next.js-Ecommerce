import { AiOutlineUser } from "react-icons/ai"

export default function HeaderSinginBtn() {
  return (
    <button className="header-btn">
      <AiOutlineUser size={20} />
      <span className="ml-1 mt-[1px] font-medium text-sm max-lg:hidden">Sign in</span>
    </button>
  )
}