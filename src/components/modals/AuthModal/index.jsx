"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleModal } from "@/lib/redux/modal"
import { Tab, Dialog } from '@headlessui/react'
import LoginTab from "./LoginTab"
import RegisterTab from "./RegisterTab"
import CloseBtn from "./ui/CloseBtn"


export default function AuthModal() {

  // Get modal state
  const isOpen = useSelector((state) => state.modal.authModal)

  // Dispatch modal state
  const dispatch = useDispatch()
  const closeModal = () => dispatch(toggleModal("authModal"))

  // Tab state to switch between login and register
  const [activeTab, setActiveTab] = useState(0)

  const tabButtonsClass = (tab) => (
    "modal-tab-btn " + (activeTab == tab && "bg-white shadow")
  )

  return (
    <Dialog as="div" className="modal-backdrop" onClose={closeModal} open={isOpen}>
      <Dialog.Panel className="modal-dialog">
        <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>

          <Dialog.Title as="div" className="pb-8 pt-6 text-sm text-gray-700 relative">
            <h2 className="mb-4 sm:mb-8 text-lg sm:text-3xl text-center">Welcome to Nexton!</h2>

            {/* Buttons to switch between login and register */}
            <Tab.List as="div" className="flex text-center bg-gray-300/30 rounded-lg p-1 select-none">
              <Tab as="div" className={tabButtonsClass(0)}>Login</Tab>
              <Tab as="div" className={tabButtonsClass(1)}>Register</Tab>
            </Tab.List>

            <CloseBtn onClick={closeModal} />
          </Dialog.Title>

          <Tab.Panels>
            {/* Login tab */}
            <Tab.Panel>
              <LoginTab />
            </Tab.Panel>

            {/* Register tab */}
            <Tab.Panel>
              <RegisterTab />
            </Tab.Panel>
          </Tab.Panels>

        </Tab.Group>
      </Dialog.Panel>
    </Dialog>
  )
}
