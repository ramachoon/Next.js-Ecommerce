import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar() {
  return (
    <div className="group bg-[#f3f3f3] w-[550px] rounded-lg pr-12 relative transition-all border border-transparent focus-within:border-primary focus-within:rounded-b-none">
      <input type="text" className="w-full h-full px-4 py-3 bg-transparent outline-none caret-primary text-sm placeholder:text-sm" placeholder="Search product or brand..." />
      <button className="flex items-center justify-center h-full px-4 absolute right-0 top-0 transition-all group-focus-within:text-primary">
        <AiOutlineSearch size={20} />
      </button>
    </div>
  )
}