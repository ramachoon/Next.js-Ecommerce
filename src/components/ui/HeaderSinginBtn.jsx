"use client"

import { AiOutlineUser } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { toggleModal } from "@/lib/redux/modal"

export default function HeaderSinginBtn() {

  // Open the modal when the button is clicked
  const dispatch = useDispatch()
  const openSigninModal = () => dispatch(toggleModal("authModal"))

  return (
    <button className="header-btn" onClick={openSigninModal}>
      <AiOutlineUser size={20} />
      <span className="ml-1 mt-[1px] font-medium text-sm max-lg:hidden">Sign in</span>
    </button>
  )
}