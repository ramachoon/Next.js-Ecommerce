export default function ContinueBtn({ type = "button", text = "Continue" }) {
  return (
    <button type={type} className="w-full py-2 border border-darken rounded-md outline-none bg-primary text-white font-medium max-sm:text-sm">
      {text}
    </button>
  )
}