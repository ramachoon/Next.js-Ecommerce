import PasswordInput from "./ui/PasswordInput"
import EmailInput from "./ui/EmailInput"
import Divider from "./ui/Divider"
import ContinueBtn from "./ui/ContinueBtn"
import ContinueWithGoogle from "./ui/ContinueWithGoogle"
import ActionButtons from "./ui/ActionButtons"
import handleLogin from "./helpers/handleLogin"

export default function LoginTab() {

  // Handle form submission
  const handleForm = (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(e.currentTarget)

    // Extract form data
    const email = formData.get("email")
    const password = formData.get("password")

    // Handle login
    handleLogin(email, password)
  }

  return (
    <form onSubmit={handleForm}>
      {/* Email input */}
      <EmailInput />
      
      {/* Password input */}
      <PasswordInput />

      {/* Action buttons */}
      <ActionButtons tabName="LoginTab" />

      {/* Continue buttons */}
      <div className="mt-4">
        <ContinueBtn text="Login" />
        <Divider />
        <ContinueWithGoogle />
      </div>
    </form>
  )
}