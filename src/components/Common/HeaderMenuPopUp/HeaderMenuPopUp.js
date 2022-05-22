import * as React from "react"
import { Link } from "gatsby"
import MobileLogo from "../../../images/svg/logoMobile.svg"
import MenuClose from "../../../images/svg/menuClose.svg"

export const HeaderMenuPopUp = ({ setIsMenu, className }) => {
  return (
    <nav
      className={`border-E3E4E5 bg-white border-solid border rounded-lg shadow-md mt-4 ${className}`}
    >
      <div className="px-5 pt-5">
        <div className="flex justify-between items-center mb-4">
          <MobileLogo className="cursor-pointer h-7 mr-4" />
          <MenuClose
            className="relative z-10 cursor-pointer"
            onClick={() => setIsMenu(false)}
          />
        </div>
        <ul className="text-center">
          <li className="text-374151 font-medium mb-4">
            <Link onClick={() => setIsMenu(false)} to="/about">
              About
            </Link>
          </li>
          <li className="text-374151 font-medium mb-4">
            <Link onClick={() => setIsMenu(false)} to="/solutions">
              Solutions
            </Link>
          </li>
          <li className="text-374151 font-medium mb-4">
            <Link onClick={() => setIsMenu(false)} to="/blogs">
              Blog
            </Link>
          </li>
          <li className="text-374151 font-medium mb-4">
            <a
              className="cursor-pointer"
              href="https://docs.ellipsis-drive.com"
            >
              Help Center
            </a>
          </li>
          <li className="text-374151 font-medium mb-4">
            <Link onClick={() => setIsMenu(false)} to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="text-374151 font-medium mb-4">
            <Link onClick={() => setIsMenu(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-1976D2 font-medium py-4 text-center bg-F9FAFB hover:bg-DBDBDB rounded-b-lg">
        <a href="https://app.ellipsis-drive.com">Go to Drive</a>
      </div>
    </nav>
  )
}
