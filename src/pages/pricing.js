import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { PricingPlans } from "../components/PricingPlans"
import { CustomButton } from "../components/Common/CustomBtn/CustomButton"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pricing - Start your journey with 5 GB data storage for free!</title>
          <description>"Only pay for what you upload. Our simple subscription based model means you only pay a monthly fee for the amount of data you upload."</description>
          <link rel="canonical" href="https://ellipsis-drive.com/pricing/" />
        </Helmet>
      </div>
    )
  }
}

const Pricing = () => (
  <Layout dark={true}>
    <aside className="relative section__container bg-1F2937 pt-10 text-center mb-230 max1000:mb-0">
      <div className="width__container">
        <div className="relative">
          <h1 className="title60 text-white max-w-950 w-full mx-auto mb-4">
            Easy data management and unlimited sharing is finally here
          </h1>
          <h4 className="text-D1D5DB text-2xl mb-6 max1140:text-xl">
            Starting at 5GB for free.
          </h4>
          <p className="text-D1D5DB text-2xl max-w-760 w-full mx-auto pb-420 max1140:text-xl max1000:pb-10">
            Ellipsis Drive applies a simple storage-based pricing model - you
            pay a monthly fee for the amount of data in your Drive.
          </p>
          <PricingPlans />
        </div>
      </div>
      <div className="bg-white w-full h-250 absolute left-0 bottom-0 hidden max1000:block" />
    </aside>
    <section className="section__container mb-28 max810:mb-14 mt-2">
      <div className="max-w-1024 w-full mx-auto bg-F3F4F6 p-10 rounded-lg">
        <div className="w-max bg-white text-sm uppercase text-1F2937 font-semibold px-4 py-1 rounded-full mb-4 max700:mx-auto">
          Our Promise
        </div>
        <div className="flex justify-between max700:flex-wrap max700:justify-center">
          <div className="max-w-610 w-full mr-10 max700:mb-4 max700:text-center max700:mr-0">
            <p className="text-4B5563 text-lg">
              To keep our pricing simple, predictable and controllable we never
              (ever) apply seat-based or action-based fees, and you are free to
              scale your storage up or down any day.
            </p>
          </div>
          <CustomButton
            className="text-white px-8 py-3 bg-1976D2 hover:bg-045CB4 font-medium w-max shadow-md h-full relative z-10 max440:px-4"
            text="Calculate storage-based pricing"
            link="https://app.ellipsis-drive.com/pricing"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default Pricing
