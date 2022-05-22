import * as React from "react"
import { CustomButton } from "../components/Common/CustomBtn/CustomButton"
import { handleEmailSubmit } from "../helpers/handleEmailSubmit"
import { Link } from "gatsby"
import Facebook from "../images/svg/facebookFooter.svg"
import Instagram from "../images/svg/instagramFooter.svg"
import Twitter from "../images/svg/twitterFooter.svg"
import LinkedIn from "../images/svg/linkedinFooter.svg"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Footer = () => {
  const onSubmit = e => {
    e.preventDefault()
    const email = e.target[0].value
    console.log("My Email: ", email);
    handleEmailSubmit(email, toast)
  }
  return (
    <footer className="bg-0D2E4C relative z-10 py-16 max700:py-8">
      <ToastContainer />
      <div className="width__container section__container flex justify-between pb-5 border-b border-solid border-4B5563 max900:flex-wrap max900:justify-center">
        <nav className="flex justify-between max-w-610 w-full max900:max-w-100% mb-6 max440:flex-wrap">
          {/* <ul className="text-D1D5DB max440:max-w-140 max440:w-full">
            <h4 className="uppercase text-sm font-semibold mb-3 text-9CA3AF">
              Solutions
            </h4>
            <li className="mb-3">
              <a href="#!">Sharing</a>
            </li>
            <li className="mb-3">
              <a href="#!">Collaborative Analytics</a>
            </li>
            <li className="mb-3">
              <a href="#!">Collaborative Mapping</a>
            </li>
            <li className="mb-3">
              <a href="#!">Large Scale Backend</a>
            </li>
            <li className="mb-3">
              <a href="#!">Data Integration and Data Fusion</a>
            </li>
            <li className="mb-3">
              <a href="#!">Data Distribution and Delivery</a>
            </li>
          </ul> */}
          <ul className="text-D1D5DB max440:max-w-140 max440:w-full max440:mb-6">
            <h4 className="uppercase text-sm font-semibold mb-3 text-9CA3AF">
              Support
            </h4>
            <li className="mb-3">
              <a href="/contact">Contact</a>
            </li>
            <li className="mb-3">
              <a href="https://docs.ellipsis-drive.com/">Help Center</a>
            </li>
            <li className="mb-3">
              <a href="https://app.ellipsis-drive.com/developer/python/start">Developer Center</a>
            </li>
            <li className="mb-3">
              <a href="https://docs.ellipsis-drive.com/developers/plugins">Plugins & Packages</a>
            </li>
          </ul>
          <ul className="text-D1D5DB max440:max-w-140 max440:w-full">
            <h4 className="uppercase text-sm font-semibold mb-3 text-9CA3AF">
              Company
            </h4>
            <li className="mb-3">
              <a href="/about">About</a>
            </li>
            <li className="mb-3">
              <a href="/blogs">Blogs</a>
            </li>
            <li className="mb-3">
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
          <ul className="text-D1D5DB max440:max-w-140 max440:w-full">
            <h4 className="uppercase text-sm font-semibold mb-3 text-9CA3AF">
              <a href="#!">Legal</a>
            </h4>
            <li className="mb-3">
              <Link to="/privacy">Privacy</Link>
            </li>
            <li className="mb-3">
              <Link to="/terms">Terms</Link>
            </li>
          </ul>
        </nav>
        <form
          className="max-w-380 w-full text-D1D5DB pl-8 max900:pl-0"
          onSubmit={onSubmit}
        >
          <h4 className="uppercase text-sm font-semibold mb-3 text-9CA3AF">
            Subscribe to our newsletter
          </h4>
          <p className="mb-3">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex justify-between max440:flex-wrap">
            <input
              className="w-full rounded-md mr-3 outline-none px-3 py-2 placeholder-333333 text-333333 max440:mb-2 max440:mr-0"
              placeholder="Enter your email"
            />
            <CustomButton
              className="px-4 py-2 bg-1976D2 hover:bg-045CB4 text-white max440:w-full"
              text="Subscribe"
              button={true}
            />
          </div>
        </form>
      </div>
      <div className="width__container section__container flex justify-between items-center mt-8 max640:flex-wrap-reverse max640:justify-center">
        <p className="text-9CA3AF">
          © 2021 Ellipsis Drive. All rights reserved.
        </p>
        <div className="flex justify-between items-center max-w-320 w-full max640:mb-6">
          <a href="https://www.linkedin.com/company/ellipsisdrive/" target="_blank">
            <LinkedIn />
          </a>
          <a href="https://www.facebook.com/ellipsisdrive/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/ellipsisdrive/" target="_blank">
            <Instagram />
          </a>
          <a href="https://twitter.com/ellipsisdrive/" target="_blank">
            <Twitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
