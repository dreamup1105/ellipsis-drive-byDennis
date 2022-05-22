import * as React from "react"
import { CustomButton } from "../components/Common/CustomBtn/CustomButton"
import CheckMark from "../images/svg/checkMark.svg"

export const PricingPlans = () => {
  return (
    <div className="absolute left-0 bottom-minus400 w-full h-full max1000:static max1140:bottom-minus350">
      <div className="flex items-center justify-center max1000:flex-wrap">
        <div className="relative max-w-350 w-full text-center bg-white rounded-l-lg shadow-xl max1000:rounded-lg max1000:max-w-500 max1000:mb-10">
          <div className="py-10 border-b border-solid border-F3F4F6">
            <h4 className="mb-4 text-111827 text-2xl font-medium">Free</h4>
            <h5 className="text-111827 text-xs font-medium">forever</h5>
            <span className="flex justify-center items-center">
              <span className="title60 text-111827 mr-3">€0</span>
              <span className="text-333333 text-xl font-medium">month</span>
            </span>
          </div>
          <div className="bg-F9FAFB rounded-b-lg p-10 max1260:px-5 max500:pb-6">
            <ul className="text-333333 font-medium mb-8 whitespace-nowrap max1260:text-center max1260:inline-block max440:whitespace-normal max440:text-left">
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Host up to 5GB on your account
                </span>
              </li>
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Join existing drive content
                </span>
              </li>
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  View and search community content
                </span>
              </li>
            </ul>
            <CustomButton
              className="text-1976D2 px-8 py-3 bg-white hover:bg-DBDBDB font-medium w-full shadow-md"
              text="Get started"
              link="https://app.ellipsis-drive.com/register"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-500 w-full text-center bg-white rounded-lg shadow-xl max1000:mb-10">
          <span className="translateX50 bg-1976D2 text-sm uppercase text-white font-semibold px-4 py-1 rounded-full absolute top-minus14">
            Most popular
          </span>
          <div className="py-10 border-b border-solid border-F3F4F6">
            <h4 className="mb-4 text-111827 text-2xl font-semibold">Premium</h4>
            <h5 className="text-111827 text-xs font-medium">starting from</h5>
            <span className="flex justify-center items-center">
              <span className="title60 text-111827 mr-3">€7,80</span>
              <span className="text-333333 text-xl font-medium">month</span>
            </span>
          </div>
          <div className="bg-F9FAFB rounded-b-lg p-10 max1260:px-5 max500:pb-6">
            <ul className="text-333333 font-medium mb-8 whitespace-nowrap max1260:text-center max1260:inline-block max440:whitespace-normal max440:text-left">
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Host your content privately
                </span>
              </li>
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Sell subscriptions on your content
                </span>
              </li>
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Receive priority support
                </span>
              </li>
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Plus everything in Regular
                </span>
              </li>
            </ul>
            <CustomButton
              className="text-white px-8 py-3 bg-1976D2 hover:bg-045CB4 font-medium w-full shadow-md"
              text="Get started"
              link="https://app.ellipsis-drive.com/register"
            />
          </div>
        </div>

        <div className="relative max-w-350 w-full text-center bg-white rounded-r-lg shadow-xl max1000:rounded-lg max1000:max-w-500 max1000:mb-10">
          <div className="py-10 border-b border-solid border-F3F4F6">
            <h4 className="mb-4 text-111827 text-2xl font-medium">Regular</h4>
            <h5 className="text-111827 text-xs font-medium">starting from</h5>
            <span className="flex justify-center items-center">
            <span className="title60 text-111827 mr-3">€5,20</span>
              <span className="text-333333 text-xl font-medium">month</span>
            </span>
          </div>
          <div className="bg-F9FAFB rounded-b-lg p-10 max1260:px-5 max500:pb-6">
            <ul className="text-333333 font-medium mb-8 whitespace-nowrap max1260:text-center max1260:inline-block max440:whitespace-normal max440:text-left">
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Unlimited storage on your account
                </span>
              </li>
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Unlimited access to private content
                </span>
              </li>
              <li className="flex relative">
                <CheckMark className="absolute top-7px" />
                <span className="pl-7 max1000:pl-6">
                  Plus everything in Free
                </span>
              </li>
            </ul>
            <CustomButton
              className="text-1976D2 px-8 py-3 bg-white hover:bg-DBDBDB font-medium w-full shadow-md"
              text="Get started"
              link="https://app.ellipsis-drive.com/register"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
