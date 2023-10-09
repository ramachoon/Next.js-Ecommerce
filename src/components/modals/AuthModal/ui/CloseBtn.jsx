import { AiOutlineClose } from "react-icons/ai"

export default function CloseBtn({ onClick }) {
  return (
    <span onClick={onClick} className="p-3 cursor-pointer absolute -top-8 -right-4 sm:-top-8 sm:-right-12 opacity-70 hover:opacity-100">
      <AiOutlineClose size={20} />
    </span>
  )
}