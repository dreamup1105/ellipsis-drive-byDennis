import * as React from "react"
import { CustomSlider } from "../components/Common/Slider/CustomSlider"
import base from "../images/base.png"
import base1 from "../images/base-1.png"
import base2 from "../images/base-2.png"
import base3 from "../images/base-3.png"
import base4 from "../images/base-4.png"
import base5 from "../images/base-5.png"
import base6 from "../images/base-6.png"
import base7 from "../images/base-7.png"
import base8 from "../images/base-8.png"
import Quotes from "../images/svg/quotes.svg"
import LeftCircle from "../images/svg/leftCircle.svg"

const sliderArr = [
  {
    img: base2,
    text: `“Ellipsis Drive is the best technological execution of leveraging OGC standards to seamlessly integrate geospatial content into any department, organization or workflow.“`,
    person: "Scott Simmons",
    job: "Chief Operating Officer",
    company: "OPEN GEOSPATIAL CONSORTIUM (OGC)",
  },
  {
    img: base4,
    text: `“Ellipsis Drive provides a full solution for data sharing, management and collaboration when relaying our results to clients.“`,
    person: "Dominique Cirkel",
    job: "Data Scientist",
    company: "ILIONX",
  },
  {
    img: base1,
    text: `“Delivering our data services via Ellipsis Drive helps us to focus on our product. Clients are delighted with the presentation of results.“`,
    person: "Tim Spijkerman",
    job: "Data Scientist",
    company: "CAELI",
  },
  {
    img: base3,
    text: `“With Ellipsis Drive, we build a monitoring system that provides us with impactful insights to understand drivers to land use change.“`,
    person: "Sander van Andel",
    job: "Program Coordinator",
    company: "IUCN NL",
  },
  {
    img: base,
    text: `“The easiest professional solution for visualizing and sharing drone images. A must-have for every professional working in spatial planning.“`,
    person: "Dick van Leeuwen",
    job: "Project Manager",
    company: "MEET B.V.",
  },
  {
    img: base5,
    text: `“Ellipsis Drive is a great way to quickly present and share your spatial data.“`,
    person: "Jack Elston",
    job: "Chief Executive Officer (CEO)",
    company: "BLACK SWIFT TECHNOLOGIES",
  },
  {
    img: base6,
    text: `“Ellipsis Drive helps us visualize and live-stream our high volume spatial datasets to support the efforts of our sales team. We experience great responsiveness from Ellipsis Drive whenever we need their assistance.“`,
    person: "Vikalpa Jetly",
    job: "Founder & CEO",
    company: "EARTHDEFINE",
  },
  {
    img: base7,
    text: `“Our EO data based information products place high demands on the flexibility and performance of the underlying data infrastructure. By collaborating with Ellipsis Drive, we can focus more on further improving the quality and user-friendliness of our products, which serves the interests of our customers.“`,
    person: "Roland Hooghiemstra",
    job: "Chief Executive Officer (CEO)",
    company: "SCIENCE [&] TECHNOLOGY CORPORATION",
  },
  {
    img: base8,
    text: `“Ellipsis Drive is our #1 choice of no-nonsense backend for easy integration of spatial data with our tailor-made front-ends.“`,
    person: "Thijs Perenboom",
    job: "Data Consultant",
    company: "52IMPACT",
  },
]

export const Testimonials = () => {
  return (
    <>
      <section className="width__container section__container mb-28 block max700:hidden">
        <h3 className="text-111827 text-3xl font-semibold text-center mb-28">
          Here’s what our customers have to say
        </h3>
        <div className="relative">
          <div className="translateY50 absolute flex justify-end ml-14 w-full right-0 top-0 1260:ml-0">
            <div className="relative bg-F6F8FA flex flex-col justify-center h-420 rounded-xl text-333333 w-full max-w-75% pr-4 1260:pr-12">
              <LeftCircle className="absolute left-0 bottom-0 rounded-bl-xl" />
            </div>
          </div>
          <CustomSlider
            isBtn={true}
            arrowLeftClass="absolute -bottom-3 left-300"
            arrowRightClass="absolute -bottom-3 left-250"
          >
            {sliderArr.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center" key={index}>
                    <img className="w-360" src={item.img} alt="img" />
                    <div className="px-7">
                      <p className="text-2xl mb-7">{item.text}</p>
                      <p>
                        <span className="font-semibold">{item.person}</span>,
                        <span> {item.job}</span>
                      </p>
                      <p>
                        <span className="text-1976D2"> {item.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </CustomSlider>
        </div>
      </section>
      {/* Mobile START */}
      {/* <section className="hidden max700:block">
        <CustomSlider
          isBtn={true}
          arrowLeftClass="absolute top-180 right-0 left-14 mx-auto"
          arrowRightClass="absolute top-180 left-0 right-14 mx-auto"
        >
          {sliderArr.map((item, index) => {
            return (
              <div className="flex justify-end pt-100 max700:block" key={index}>
                <div className="section__container text-333333 pb-14 w-full bg-F6F8FA relative pt-230">
                  <Quotes className="absolute left-4 top-150" />
                  <img
                    className="object-cover shadow-xl h-200 w-360 rounded-xl translateX50 absolute top-minus100"
                    src={base}
                    alt="img"
                  />
                  <div>
                    <h4 className="text-2xl mb-7">
                      Ellipsis Drive is the best!
                    </h4>
                    <p className="mb-5">
                      “
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.“
                    </p>
                    <p>
                      <span className="font-semibold">John Smith</span>,Project
                      Manager
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
          
        </CustomSlider>
      </section> */}
      {/* Mobile END */}
    </>
  )
}
