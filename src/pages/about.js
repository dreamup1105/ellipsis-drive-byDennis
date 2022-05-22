import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { CustomButton } from "../components/Common/CustomBtn/CustomButton"
import { JoinCommunity } from "../components/JoinCommunity"
import { Testimonials } from "../components/Testimonials"
import HeaderImg from "../images/aboutHeaderImg.png"
import Photo1 from "../images/aboutOriginPhoto1.png"
import Photo2 from "../images/aboutOriginPhoto2.png"
import Photo3 from "../images/aboutOriginPhoto3.png"
import Photo4 from "../images/aboutOriginPhoto4.png"
import Global from "../images/svg/globalIcon.svg"
import Scale from "../images/svg/scaleIcon.svg"
import LightingBolt from "../images/svg/lightingBolt.svg"
import Message from "../images/svg/messageIcon.svg"
import Logo1 from "../images/svg/qgis-logo.svg"
import Logo2 from "../images/svg/python-logo.svg"
import Logo3 from "../images/svg/leaflet-logo.svg"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ellipsis Drive - Harnessing the power of spatial data!</title>
          <description>"We aim to create an environment where all you need to exchange, view and use spatial content, is a browser and a link."</description>
          <link rel="canonical" href="https://ellipsis-drive.com/about/" />
        </Helmet>
      </div>
    )
  }
}

const About = () => {
  return (
    <Layout dark={true}>
      <aside className="relative z-10 pb-70 bg-1F2937 mb-28 max810:mb-14">
        <div className="relative z-10 flex items-center justify-between py-5 width__container section__container max900:flex-wrap max900:py-0 max900:justify-center">
          <div className="w-full pr-4 max-w-775 max700:text-left max900:mb-8">
            <h1 className="text-white title60">
              Ellipsis Drive is here for spatial data
            </h1>
            <h1 className="title60 text-089EC8 mb-9 max700:mb-4">
              worth sharing
            </h1>
            <p className="text-lg font-normal text-D1D5DB mb-9 max700:mb-4 max1140:text-base">
              Enabling a world where all you need to exchange, view and use
              spatial content, is a browser and a link.
            </p>
            {/* <h5 className="mb-5 text-sm font-semibold text-white uppercase">
              Used by
            </h5>
            <div className="flex justify-between">
              <Logo1 className="px-2" />
              <Logo2 className="px-2" />
              <Logo3 className="px-2" />
            </div> */}
          </div>
          <img
            className="block object-contain w-full max-w-500 max700:mx-auto max1140:max-w-325 max700:hidden"
            src={HeaderImg}
            alt="img"
          />
          <img
            className="hidden object-contain w-full max700:mx-auto max-w-380 max700:block"
            src={HeaderImg}
            alt="img"
          />
        </div>
      </aside>
      <section className="text-center width__container section__container mb-28 max810:mb-14 ">
        <p className="mb-1 font-semibold uppercase text-1976D2 max500:text-left">
          Our PURPOSE
        </p>
        <h2 className="text-center title36 text-111827 mb-14 max500:text-left">
          We aim to democratize spatial data for all.
          <br />
          Empowering the industry and advancing your business goals.
        </h2>
        <div className="flex justify-between mb-16 max810:flex-wrap max810:justify-center max810:mb-0">
          <div className="flex w-full mr-4 max-w-610 max810:mr-0 max810:mb-8">
            <Global className="w-full max-w-48" />
            <div className="pl-4 text-left">
              <h5 className="mb-2 text-lg font-medium text-111827 ">
                Create value for people with data worth sharing
              </h5>
              <p className="text-333333">
                Be the most value added place to activate spatial data that
                needs to be used.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-610 max810:mb-8">
            <Scale className="w-full max-w-48" />
            <div className="pl-4 text-left">
              <h5 className="mb-2 text-lg font-medium text-111827 ">
                Safeguard platform independence
              </h5>
              <p className="text-333333">
                Maximizing interoperability is at the center of what we do.
                That’s how you stay relevant.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between max810:flex-wrap max810:justify-center">
          <div className="flex w-full mr-4 max-w-610 max810:mr-0 max810:mb-8">
            <LightingBolt className="w-full max-w-48" />
            <div className="pl-4 text-left">
              <h5 className="mb-2 text-lg font-medium text-111827 ">
                Introduce ‘the Drive experience’ to the spatial industry
              </h5>
              <p className="text-333333">
                Enable cloud activation, share your data in minutes, work
                together in real-time.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-610 max810:mb-8">
            <Message className="w-full max-w-48" />
            <div className="pl-4 text-left">
              <h5 className="mb-2 text-lg font-medium text-111827 ">
                Enable data sharing and collaboration without limits
              </h5>
              <p className="text-333333">
                Never impose ‘by seat’ or ‘by action’ fees that make data
                sharing and using expensive.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center width__container section__container mb-28 max810:mb-14">
        <p className="mb-1 font-semibold uppercase text-1976D2 max500:text-left">
          Our ORIGIN
        </p>
        <h2 className="text-center title36 text-111827 mb-14 max500:text-left">
          Every story is unique and worth sharing - and we are no exception!
        </h2>
        <div>
          <div className="mb-8 gallery">
            <div className="overflow-hidden gallery__item--1">
              <img className="gallery__img" src={Photo1} alt="img" />
            </div>
            <div className="overflow-hidden gallery__item--2">
              <img className="gallery__img" src={Photo2} alt="img" />
            </div>
            <div className="overflow-hidden gallery__item--3">
              <img className="gallery__img" src={Photo3} alt="img" />
            </div>
            <div className="overflow-hidden gallery__item--4">
              <img className="gallery__img" src={Photo4} alt="img" />
            </div>
          </div>
          <CustomButton
            className="py-2 text-white px-28 bg-1976D2 hover:bg-045CB4 max500:w-full"
            text="Read our story"
            link="/blog/the-genesis-of-ellipsis-drive"
          />
        </div>
      </section>
      <JoinCommunity className="mb-28 max700:mb-14" />
      <Testimonials />
    </Layout>
  )
}

export default About
