import { toast } from "react-toastify"

const login = (user = "") => {
  toast.info(
    <div className="text-black text-sm flex flex-col">
      <span>Welcome {user}!</span>
      <span>You are now logged in.</span>
    </div>
  )
}

const register = (user = "") => {
  toast.info(
    <div className="text-black text-sm flex flex-col">
      <span>Welcome {user}!</span>
      <span>You are now registered and logged in.</span>
    </div>
  )
}

const logout = () => {
  toast.info(
    <div className="text-black text-sm flex flex-col">
      <span>You have logged out.</span>
      <span>Your session has been safely terminated.</span>
    </div>
  )
}

// Export all toast functions
export const showToast = {
  login,
  register,
  logout,
}