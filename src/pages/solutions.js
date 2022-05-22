import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import { CustomButton } from "../components/Common/CustomBtn/CustomButton"
import { HeaderMenuPopUp } from "../components/Common/HeaderMenuPopUp/HeaderMenuPopUp"
// import { Plugins } from "../components/Plugins"
import { SolutionCard } from "../components/SolutionCard"
import SolutionHeader from "../images/solutionHeader.png"
import Image1 from "../images/Image1.png"
import Image2 from "../images/Image2.png"
import Image3 from "../images/Image3.png"
import Image4 from "../images/Image4.png"
import Image5 from "../images/Image5.png"
import Image6 from "../images/featured_image.png"
import LogoDark from "../images/svg/logoDark.svg"
import HeaderLogo from "../images/svg/headerLogo.svg"
import HeaderRightGrid from "../images/svg/headerRightGrid.svg"
import MobileLogoDark from "../images/svg/logoDarkMobile.svg"
import MenuOpen from "../images/svg/solutionMobileMenu.svg"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Solutions - A simplified and spart approach to geospatial data management.</title>
          <description>"A collaborative approach powered by cloud technology to upload, share and sell geospatial data."</description>
          <link rel="canonical" href="https://ellipsis-drive.com/solutions/" />
        </Helmet>
      </div>
    )
  }
}

// const solutionCards = [
//   {
//     img: Image2,
//     title: "Data Delivery and Integration",
//     text: "To avoid leaving your clients with a fragmented and underwhelming experience that hurts your customer relationships, you need to meet their ever-evolving data consumption needs. As such, you help your customers successfully integrate your data products into their unique workflows, apps and organization by investing hours of account management, consulting and solution engineering, on top of developing and maintaining your own APIs, server environments, custom applications and web services. All of this effort diverts time and resources away from how you,  as a producer of spatial data, add unique value. As such, meeting the plethora of current and future data integration needs with self-made and self-maintained solutions is distracting, not scalable and highly time inefficient. ",
//   },
//   {
//     img: Image1,
//     title: "Off-the-Shelf Back-end Capabilities",
//     text: "As a producer of spatial data products and analytics, structuring, hosting and managing your data effectively requires hours of infrastructure development and maintenance from your team. Building a complete IT pipeline that supports an end-to-end data service for your customers’ ever evolving needs and preferences also represents a never-ending task that diverts your resources away from focusing on your core business: producing valuable data products that can solve your clients problems. ",
//   },
//   {
//     img: Image6,
//     title: "Collaborative Mapping Projects",
//     text: "Collecting field data and putting together maps with stakeholders is a precious effort. For specific engineering work that requires only the highest quality of data, the industry usually relies on specialised equipment tailored to this job. However, oftentimes your clients’ data needs are more coarse and specific to their situation, in for example ecological assessments and asset mapping, leaving you without off-the-shelf solutions fitted to these use cases and needing to get creative with the tools used to gather, manage and visualise the spatial insights required.",
//   },
//   {
//     img: Image3,
//     title: "Collaborative Spatial Analytics Projects",
//     text: '"Great spatial intelligence is delivered by interdisciplinary teams."' + " " + "The best spatial intelligence is created with direct input from your clients. However, collaborating on spatial data is always hard because data driven professionals from various disciplines, such as data scientists, developers, GIS experts and project managers, have different needs and preferences when it comes to using spatial data. The result is a fragmented, time-consuming process when spatial data changes hands often and needs to be manually converted into a usable format for each of them. Keeping track of data versions and working on data simultaneously is near impossible",
//   },
//   {
//     img: Image4,
//     title: "Dynamic Result Sharing",
//     text: "Sharing the results of your latest data acquisition or analytics effort with your clients and partners in a professional and timely manner is essential for their situational awareness, ability to cooperate, and project success. However, getting 2D and 3D spatial data products shared and visualized can be a cumbersome process due to the required level of GIS or data engineering knowledge and the dependence on specific software applications and hardware requirements for proper display, exploration and interpretation of these data. ",
//   },
// ]

const Solution = ({ data }) => {
  const articles = data.allPrismicSolution.nodes
  const articleText = []
  for (let i = 0; i < articles.length; i++) {
    articleText[i] = "";
    for (let j = 0; j < articles[i].data.text.richText.length; j++) {
      if (articles[i].data.text.richText[j].type == "paragraph") {
        articleText[i] += articles[i].data.text.richText[j].text
        articleText[i] += " "
      }
    }
  }

  const navigateToArticle = article => {
    navigate(`/solution/${article.uid}`)
    // return () => navigate(`/solution/${article.uid}`)
  }

  const [isMenu, setIsMenu] = React.useState(false)
  return (
    <Layout headerClassName="max640:hidden" contentClassName="bg-F9FAFB">
      <aside className="width__container section__container mb-28 relative z-10 max810:mb-14 max640:hidden">
        <div className="overflow-hidden pt-32 pb-16 relative z-10 rounded-xl">
          <div
            className="scale1-1 absolute left-0 top-0 w-full h-full"
            style={{
              background: `url(${SolutionHeader})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 max-w-700 w-full text-center mx-auto max1140:max-w-450">
            <h1 className="title60 text-white mb-8">
              Simplifying spatial data management
            </h1>
            <p className="text-xl text-white font-normal mb-9 max700:mb-4 max1140:text-base">
              For you, your partners and your clients.
            </p>
            <p className="text-xl text-white font-normal mb-9 max700:mb-4 max1140:text-base">
              Ellipsis Drive creates value for businesses and projects of all
              types and sizes. What do they have in common? Spatial data worth
              sharing!
            </p>
            <CustomButton
              className="text-1976D2 px-8 py-3 bg-white hover:bg-DBDBDB font-medium"
              text="Get started"
              link="https://app.ellipsis-drive.com/register"
            />
          </div>
        </div>
        <HeaderRightGrid className="absolute left-0 bottom-0" />
      </aside>
      {/* Mobile version START */}
      <aside
        className="hidden px-4 text-center mb-16 max640:block"
        style={{
          background: `url(${SolutionHeader})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-0 top-0 px-4 w-full z-20">
          <HeaderMenuPopUp
            className={isMenu ? "block text-left" : "hidden"}
            setIsMenu={setIsMenu}
          />
        </div>
        <nav className="flex justify-between items-center pt-6 pb-8">
          <LogoDark className="cursor-pointer mr-4 h-10" />
          <MenuOpen
            className="relative z-10 cursor-pointer"
            onClick={() => setIsMenu(true)}
          />
        </nav>
        <h1 className="title60 text-white mb-6">
          Simplifying spatial data management
        </h1>
        <p className="text-xl text-white font-normal max700:mb-4 max1140:text-base">
          For you, your partners and your clients.
        </p>
        <p className="text-xl text-white font-normal mb-8 max700:mb-4 max1140:text-base">
          Ellipsis Drive creates value for businesses and projects of all types
          and sizes. What do they have in common? Spatial data worth sharing!
        </p>
        <CustomButton
          className="text-1976D2 px-8 py-3 bg-white hover:bg-DBDBDB font-medium mb-10 max440:w-full"
          text="Get started"
          link="#!"
        />
      </aside>
      {/* Mobile version END */}
      <section className="width__container section__container pb-28 max810:pb-14">
        {/* <Partners text="PROUDLY SUPPORTING" /> */}
      </section>
      <section className="width__container section__container pb-16 max810:pb-2">
        <div className="max-w-610 w-full text-center mx-auto">
          <h1 className="title36 text-black mb-4">Solutions</h1>
          <p className="mb-12 text-333333">
            Learn how Ellipsis Drive can help organizations like yours to be more successful when using, producing, and sharing spatial data.
          </p>
        </div>
        <div className="flex justify-between flex-wrap max1420:justify-around">
          {articles.map((item, index) => {
            return (
              <SolutionCard
                onClick={() => navigateToArticle(item)}
                img={item.data.featured_image.url}
                title={item.data.title.text}
                text={articleText[index].slice(0, 200) + "..."}
                key={index}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SolutionsQuery {
    allPrismicSolution(sort: {fields: data___date, order: DESC}) {
      nodes {
        uid
        data {
          date
          featured_image {
            url
          }
          text {
            richText
          }
          title {
            text
          }
        }
      }
    }
  }
`

export default Solution
