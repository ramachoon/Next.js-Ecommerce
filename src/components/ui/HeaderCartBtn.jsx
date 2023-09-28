import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function HeaderCartBtn() {
  return (
    <button className="flex items-center py-2 pr-4 pl-3 cursor-pointer hover:bg-gray-100 rounded-md">
      <AiOutlineShoppingCart size={20} />
      <span className="ml-1.5 mt-[1px] font-medium text-sm">Cart</span>
    </button>
  )
}