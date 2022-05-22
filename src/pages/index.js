import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { navigate } from "gatsby"
import { CustomButton } from "../components/Common/CustomBtn/CustomButton"
import { JoinCommunity } from "../components/JoinCommunity"
import { Testimonials } from "../components/Testimonials"
import { Plugins } from "../components/Plugins"
import MackBook from "../images/macBook.png"
import MobileMackBook from "../images/mobileMacBook.png"
import PainPC from "../images/painPC.png"
import Solution from "../images/solution.png"
import Map from "../images/map.png"
import IndexFooterCta from "../images/svg/indexFooterCta.svg"
import HeaderRightGrid from "../images/svg/headerRightGrid.svg"
import Logo1 from "../images/logos/52impact.png"
import Logo2 from "../images/logos/caeli.png"
import Logo3 from "../images/logos/ilionx.png"
import Logo4 from "../images/logos/meetbv.png"
import Logo5 from "../images/logos/nso.png"
import Logo6 from "../images/logos/s&t.png"
import Logo7 from "../images/logos/witteveen.png"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ellipsis Drive - The world's first Drive for spatial data!</title>
          <description>"Bridge the gap between your data and your audience the easy way. Go from computer to cloud in minutes!"</description>
          <link rel="canonical" href="https://ellipsis-drive.com/" />
        </Helmet>
      </div>
    )
  }
}

const IndexPage = ({ location }) => {
  return (
    <Layout>
      <aside className="relative z-10 pb-70 bg-F9FAFB">
        <div className="width__container section__container">
          <div className="relative z-10 flex justify-between shadow-xl py-100 bg-F6F8FA rounded-2xl max700:flex-wrap max700:shadow-none max700:bg-transparent max700:py-0">
            <div className="w-full pl-6 max700:pl-0 max700:text-center max-w-680">
              <h1 className="title60 text-111827">The world’s first</h1>
              <h1 className="title60 text-1976D2 mb-9 max700:mb-4">
                Drive for spatial data!
              </h1>
              <p className="text-lg font-normal text-333333 max1140:text-base">
                Bridge the gap between your data and your audience the easy way.
              </p>
              <p className="text-lg font-normal text-333333 mb-9 max700:mb-4 max1140:text-base">
                Go from computer to cloud in minutes!
              </p>
              <CustomButton
                className="px-5 py-3 font-medium text-white bg-1976D2 hover:bg-045CB4 max700:mb-10"
                text="Start now with 5GB free storage"
                link="https://app.ellipsis-drive.com/register"
              />
            </div>
            <img
              className="block object-cover w-full max-w-500 max1140:max-w-380 max1000:max-w-300 max1000:object-contain max700:mx-auto max700:hidden"
              src={MackBook}
              alt="img"
            />
            <img
              className="hidden object-contain w-full max700:mx-auto max-w-560 max700:block"
              src={MobileMackBook}
              alt="img"
            />
          </div>
        </div>
        <HeaderRightGrid className="absolute bottom-0 left-0" />
      </aside>
      <section className="pt-32 width__container section__container max810:pt-16">
        <div>
          <h6 className="mb-6 text-sm font-semibold text-center uppercase text-333333">
            TRUSTED BY THE INDUSTRY LEADERS
          </h6>
          <div className="flex justify-between max1300:flex-wrap max1300:justify-around">
            <img src={Logo1}  className="m-4" style={{maxWidth: "7rem"}} />
            <img src={Logo2}  className="m-4" style={{maxWidth: "7rem"}} />
            <img src={Logo3}  className="m-4" style={{maxWidth: "7rem"}} />
            <img src={Logo4}  className="m-4" style={{maxWidth: "7rem"}} />
            <img src={Logo5}  className="m-4" style={{maxWidth: "7rem"}} />
            <img src={Logo6}  className="m-4" style={{maxWidth: "7rem"}} />
            <img src={Logo7}  className="m-4" style={{maxWidth: "7rem"}} />
          </div>
        </div>
      </section>
      <section className="pt-32 width__container section__container mb-28 max810:mb-14 max810:pt-16">
        <div className="flex items-center justify-between mb-100 max700:flex-wrap max500:mb-12">
          <div className="w-full pr-8 text-333333 max-w-680 max700:mx-auto max700:pr-0">
            <h3 className="mb-3 title30 text-111827">
              Better understand your customers.
            </h3>
            <p className="mb-6">
              Let's face it - managing, sharing and integrating spatial data is
              hard. Meeting your client’s varying data consumption needs is a real
              task that requires constant development, maintenance and support
              from your team.{" "}
            </p>
            <p className="mb-6">
              Structuring and managing your own data, from inputs to outputs, can
              be equally challenging. Especially when dealing with a variety of
              high-volume spatial data.
            </p>
            <p className="mb-6">
              This hinders you from developing a future-proof, end-to-end data
              service that scales, and keeps you away from your core business:{" "}
              <span className="font-bold">producing spatial data of value.</span>
            </p>
          </div>
          <img
            className="max1140:max-w-300 max1140:w-full max700:max-w-610 max700:mx-auto"
            src={PainPC}
            alt="img"
          />
        </div>
        <div className="flex items-center justify-between max700:flex-col-reverse max700:flex-wrap">
          <img
            className="max1140:max-w-300 max1140:w-full max700:mx-auto"
            src={Solution}
            alt="img"
          />
          <div className="w-full pl-8 text-333333 max-w-680 max700:mx-auto max700:pl-0">
            <h3 className="mb-3 title30 text-111827">
              We make sharing data easier!
            </h3>
            <p className="mb-6">
              Ellipsis Drive makes managing, sharing and integrating your data and
              analytics products easy for literally everyone.
              <span className="font-bold">Yes, everyone.</span>
            </p>
            <p className="mb-6">
              Every colleague, partner and client can seamlessly ingest your data
              into any existing workflow or app, regardless of their professional
              background. Real time accessible via their tools of choice. Provide
              your clients with the best data integration experience possible
              while keeping you focused on producing valuable data and analytics
              products.
            </p>
          </div>
        </div>
      </section>
      <section className="width__container section__container mb-28 max810:mb-14">
        <div className="flex justify-between pl-20 overflow-hidden bg-0D2E4C rounded-2xl max1140:pl-6 max700:block max700:pl-0">
          <div className="w-full py-20 max-w-560 max1000:py-6 max700:px-6 max700:pb-12 max440:mx-auto">
            <h2 className="w-full mb-3 text-white title36 max-w-440">
              What can Ellipsis Drive do for you?
            </h2>
            <li className="text-lg text-white mb-2">
              Make spatial data management easy.
            </li>
            <li className="text-lg text-white mb-2">
              Connect your data to your target audience in minutes.
            </li>
            <li className="text-lg text-white mb-2">
              Support all popular data endpoints and protocols off-the-shelf.
            </li>
            <div className="max440:flex max440:justify-center">
              <CustomButton
                className="px-5 py-3 font-medium bg-white text-1976D2 hover:bg-DBDBDB max440:px-3"
                text="Start now with 5GB free storage"
                link="https://app.ellipsis-drive.com/register"
              />
            </div>
          </div>
          <div className="relative max-w-560 w-full ml-4 max700:ml-0 max700:h-200 max700:max-w-100%">
            <img
              className="absolute bottom-0 right-0 max700:h-200"
              src={Map}
              alt="img"
            />
          </div>
        </div>
      </section>
      <section className="width__container section__container mb-28 max810:mb-14">
        <div className="w-full mx-auto mb-16 text-center max-w-680 max500:text-left">
          <p className="mb-1 font-semibold uppercase text-1976D2">
            OPTIMIZED FOR SPATIAL DATA
          </p>
          <h2 className="mb-3 title36 text-111827">
            Simply put, it works like a Drive!
          </h2>
          <p className="mb-7 text-333333">
            We make your spatial data and analytics products as easy to manage,
            share and collaborate on as any text document in a regular drive.
            Ellipsis Drive converts uploaded spatial data files into beautiful
            live maps and web services.
          </p>
          <p className="text-333333">
            Made flexibly accessible through <b>REST-API, Python package, OGC
            Protocols or a simple web URL</b>, in addition to <b>plugins</b> for your
            favorite tools and tech stack!
          </p>
        </div>
        <Plugins text="PLUGINS AVAILABLE FOR" />
      </section>
      <JoinCommunity className="mb-28 max700:mb-14" />
      <Testimonials />
      <section className="relative z-10 py-20 bg-0D2E4C max700:py-10">
        <div className="width__container section__container">
          <div className="relative z-10 w-full mx-auto text-center text-white max-w-680">
            <h1 className="mb-4 title36">Your Drive, your data, your choice.</h1>
            <p className="text-lg font-medium mb-7">
              Ellipsis Drive has a simple storage-based payment model: you pay a
              monthly fee for the amount of data in your Drive.{" "}
              <span className="font-bold">That’s it</span>.
            </p>
            <p className="text-lg font-medium mb-7">
              The number of people you share your content with, or how that
              content is used, is entirely up to you and does not affect fees in
              any way. We offer the vault, but you keep the keys!
            </p>
            <CustomButton
              className="px-5 py-3 font-medium bg-white text-1976D2 hover:bg-DBDBDB"
              text="Start now with 5GB free storage"
              link="https://app.ellipsis-drive.com/register"
            />
          </div>
          <IndexFooterCta className="absolute top-0 left-0 max700:hidden" />
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage
