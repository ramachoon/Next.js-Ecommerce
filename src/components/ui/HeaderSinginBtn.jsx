import { AiOutlineUser } from "react-icons/ai"

export default function HeaderSinginBtn() {
  return (
    <button className="flex items-center py-2 pr-4 pl-3 cursor-pointer hover:bg-gray-100 rounded-md">
      <AiOutlineUser size={20} />
      <span className="ml-1 mt-[1px] font-medium text-sm">Sign in</span>
    </button>
  )
}