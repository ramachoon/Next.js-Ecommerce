export default function ActionButtons({ tabName }) {
  if (tabName === "LoginTab") {
    return (
      <div className="mt-1 pb-4 max-sm:pb-4 flex flex-wrap max-sm:flex-col max-sm:justify-center max-sm:items-start justify-between items-center text-xs">
        <div className="flex items-center cursor-pointer relative max-sm:hidden">
          <input id="default-checkbox" type="checkbox" className="w-[14px] h-[14px] cursor-pointer" />
          <label htmlFor="default-checkbox" className="ml-1.5 cursor-pointer py-2 select-none text-gray-600">
            Remember me
          </label>
        </div>
        <a href="#" className="sm:text-xs text-primary py-2 max-sm:py-0 max-sm:w-full">
          Forgot password?
        </a>
      </div>
    )
  }

  if (tabName === "RegisterTab") {
    return (
      <div className="mt-1 max-sm:mt-4 pb-4 flex items-center text-xs">
        <div className="flex items-center cursor-pointer relative">
          <input id="default-checkbox" type="checkbox" className="w-[14px] h-[14px] cursor-pointer" />
          <label htmlFor="default-checkbox" className="ml-1.5 max-sm:ml-4 cursor-pointer py-2 select-none text-gray-600">
            I have read and agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </label>
        </div>
      </div>
    )
  }
}