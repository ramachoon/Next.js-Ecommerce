import PasswordInput from "./ui/PasswordInput"
import EmailInput from "./ui/EmailInput"
import Divider from "./ui/Divider"
import ContinueBtn from "./ui/ContinueBtn"
import ContinueWithGoogle from "./ui/ContinueWithGoogle"
import ActionButtons from "./ui/ActionButtons"

export default function LoginTab() {
  return (
    <>
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
    </>
  )
}