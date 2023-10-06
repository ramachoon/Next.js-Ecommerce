import Image from "next/image"
import Logo from "@/components/ui/Logo"
import { FaInstagram, FaFacebook, FaTwitter, FaGooglePlus } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-white/50 mt-12">
      <div className="container overflow-hidden">

        <div className="py-12 grid grid-cols-12 gap-12 max-lg:gap-x-0">
          {/* Company section */}
          <div className="col-span-4 max-lg:col-span-12">
            <span className="text-white">
              <Logo />
            </span>
            <p className="mt-4 max-w-[700px]">Nexton is the go-to destination for reliable shopping, offering the latest products for every need at affordable prices.</p>
            <ul className="mt-2 flex text-2xl flex-wrap">
              <li>
                <a href="https://www.facebook.com/" className="inline-block p-2 pl-0 hover:text-white" rel="noreferrer" target="_blank">
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="inline-block p-2 hover:text-white" rel="noreferrer" target="_blank">
                  <FaInstagram></FaInstagram>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" className="inline-block p-2 hover:text-white" rel="noreferrer" target="_blank">
                  <FaTwitter></FaTwitter>
                </a>
              </li>
              <li>
                <a href="https://google.com/" className="inline-block p-2 hover:text-white" rel="noreferrer" target="_blank">
                  <FaGooglePlus></FaGooglePlus>
                </a>
              </li>
            </ul>
          </div>

          {/* About us section */}
          <div className="col-span-2 max-lg:col-span-6">
            <h3 className="text-white text-lg">About us</h3>
            <ul className="mt-4 flex flex-col gap-y-2">
              <li>
                <a className="hover:text-white" href="#">Who we are</a>
              </li>
              <li>
                <a className="hover:text-white" href="#">Services</a>
              </li>
              <li>
                <a className="hover:text-white" href="#">Careers</a>
              </li>
              <li>
                <a className="hover:text-white" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:text-white" href="#">Sustainability</a>
              </li>
            </ul>
          </div>

          {/* Useful links section */}
          <div className="col-span-2 max-lg:col-span-6">
            <h3 className="text-white text-lg">Useful links</h3>
            <ul className="mt-4 flex flex-col gap-y-2">
              <li>
                <a className="hover:text-white" href="#">My account</a>
              </li>
              <li>
                <a className="hover:text-white" href="#">Cart</a>
              </li>
              <li>
                <a className="hover:text-white" href="#">Checkout</a>
              </li>
              <li>
                <a className="hover:text-white" href="#">Privacy Policy</a>
              </li>
              <li>
                <a className="hover:text-white" href="#">Customer support</a>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div className="col-span-4 max-lg:col-span-12">
            <h3 className="text-white text-lg">Newsletter</h3>
            <p className="mt-4">Get all the latest information, sales and offers.</p>
            <div className="mt-4 flex gap-2 items-center max-[300px]:flex-wrap">
              <input type="text" className="bg-zinc-800 w-full rounded-lg px-4 py-3 outline-none bg-transparent text-sm" placeholder="Enter your email..." />
              <button className="text-sm bg-primary text-white h-full p-3 px-4 rounded-lg">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex justify-between items-center py-6 text-sm border-t border-default/10 max-lg:flex-col max-lg:gap-y-4">
          <div className="max-lg:text-center">NEXTON &copy; 2023 | All Rights Reserved.</div>

          {/* Payment icons */}
          <div className="flex gap-2 max-lg:flex-wrap max-lg:justify-center">
            <Image
              src="/icons/paypal.svg"
              height={22}
              width={36}
              alt="Payment method icon."
              style={{ width: "auto", height: "auto" }}
            />
            <Image src="/icons/visa.svg"
              height={22}
              width={36}
              alt="Payment method icon."
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/icons/discover-card.svg"
              height={22}
              width={36}
              alt="Payment method icon."
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/icons/mastercard.svg"
              height={22}
              width={36}
              alt="Payment method icon."
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>

      </div>
    </footer>
  )
}