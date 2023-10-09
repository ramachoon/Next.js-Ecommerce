import Image from "next/image"

export default function ContinueWithGoogle() {
  return (
    <button className="google-btn">
      <span>
        <Image src="/icons/google-icon.svg" alt="Google logo" width={16} height={16}></Image>
      </span>

      <span>Continue with Google</span>
    </button>
  )
}