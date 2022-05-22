import * as React from "react"
import { CustomButton } from "../components/Common/CustomBtn/CustomButton"
import { HeaderMenuPopUp } from "../components/Common/HeaderMenuPopUp/HeaderMenuPopUp"
import { Link } from "gatsby"
import HeaderLogo from "../images/svg/headerLogo.svg"
import LogoDark from "../images/svg/logoDark.svg"
import MobileLogo from "../images/svg/logoMobile.svg"
import MobileLogoDark from "../images/svg/logoDarkMobile.svg"
import MenuOpen from "../images/svg/menuOpen.svg"
import MenuOpenDark from "../images/svg/menuOpenDark.svg"
import Helmet from "react-helmet"

const Header = ({ dark = false, headerClassName }) => {
  const [isMenu, setIsMenu] = React.useState(false)

  return (
    <header className={`relative h-24 ${headerClassName}`}>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
      </Helmet>
      <div
        className={`h-24 fixed z-50 w-full ${dark ? "bg-1F2937" : "bg-F9FAFB"}`}
      >
        <div className="width__container section__container">
          <div className="absolute left-0 top-0 px-4 w-full z-20">
            {isMenu && <HeaderMenuPopUp setIsMenu={setIsMenu} />}
          </div>
          <nav className="flex justify-between items-center pt-7 pb-7">
            {dark ? (
              <Link className="cursor-pointer mr-4" to="/">
                <LogoDark className="h-10" />
              </Link>
            ) : (
              <Link className="cursor-pointer mr-4" to="/">
                <HeaderLogo className="h-10" />
              </Link>
            )}
            <div
              className={`${
                dark ? "text-white" : "text-333333"
              } font-medium max-w-440 w-full flex justify-between relative z-10 max900:text-sm max700:hidden`}
            >
              <Link className="cursor-pointer" to="/about">
                About
              </Link>
              <Link className="cursor-pointer" to="/solutions">
                Solutions
              </Link>
              <Link className="cursor-pointer" to="/blogs">
                Blogs
              </Link>
              <a
                className="cursor-pointer"
                href="https://docs.ellipsis-drive.com"
                target="_blank"
              >
                Help Center
              </a>
              <Link className="cursor-pointer" to="/pricing">
                Pricing
              </Link>
              <Link className="cursor-pointer" to="/contact">
                Contact
              </Link>
            </div>
            <CustomButton
              className="ml-4 px-4 py-2 shadow font-medium text-1976D2 bg-white hover:bg-DBDBDB relative z-20 max700:hidden"
              text="Go To Drive"
              link="https://app.ellipsis-drive.com"
            />
            {dark ? (
              <MenuOpenDark
                className="relative z-10 hidden cursor-pointer max700:block"
                onClick={() => setIsMenu(true)}
              />
            ) : (
              <MenuOpen
                className="relative z-10 hidden cursor-pointer max700:block"
                onClick={() => setIsMenu(true)}
              />
            )}
          </nav>
          {/* {!dark && (
          <HeaderRightGrid className="absolute z-10 right-0 top-0 max700:right-minus200 max700:top-minus200 max700:hidden" />
        )} */}
        </div>
      </div>
    </header>
  )
}

export default Header
