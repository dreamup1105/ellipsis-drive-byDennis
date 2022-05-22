import * as React from "react"
import { CustomButton } from "./Common/CustomBtn/CustomButton"
import { handleEmailSubmit } from "../helpers/handleEmailSubmit"
import Earth from "../images/earth.png"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const JoinCommunity = ({ className, leftBackgroundBlock = true }) => {
  const onSubmit = e => {
    e.preventDefault()
    const email = e.target[0].value
    handleEmailSubmit(email, toast)
  }

  return (
    <section className={`${className} overflow-hidden`}>
      <div
        className={`${
          leftBackgroundBlock ? "py-8" : "py-0"
        } width__container section__container relative  max810:py-0`}
      >
        <div className="bg-F9FAFB w-1/2 h-full rounded-tr-3xl rounded-br-3xl mb-28 absolute left-0 top-0 max810:hidden" />
        <div className="flex justify-between items-center pl-12 bg-F6F8FA shadow-xl relative z-10 rounded-2xl max1140:pl-6 max810:pr-6">
          <div className="py-20 max1140:py-10">
            <h2 className="title36 text-111827 mb-6 max-w-830 w-full">
              Join our global community of passionate spatial data professionals.
            </h2>
            <p className="max-w-680 w-full text-lg text-333333">
            The spatial industry plays a crucial role in shaping the future. Democratizing spatial data to elevate the spatial industry is all that matters to us.
            </p>
            <p className="font-bold text-lg text-333333 mb-12">
            Stay up-to-date on what’s happening in the spatial industry.
            </p>
            <form className="flex max500:flex-wrap" onSubmit={onSubmit}>
              <input
                className="max-w-320 w-full rounded-md mr-3 outline-none px-4 py-2 placeholder-333333 placeholder-text-center text-333333 max500:max-w-100% max500:mr-0 max500:mb-4"
                placeholder="Enter your email"
              />
              <CustomButton
                className="px-4 py-2 bg-1976D2 hover:bg-045CB4 text-white max500:w-full text-center"
                text="Join the community"
                button={true}
              />
            </form>
          </div>
          <div className="max-w-350 w-full max1140:max-w-250 max810:hidden">
            <img
              className="translateY50 absolute right-minus130 top-0 pl-4 h-full max1300:h-330"
              src={Earth}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
