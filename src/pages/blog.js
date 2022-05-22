import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import { RichText } from "prismic-reactjs"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Blog - Latest articles, updates and press releases in the geospatial industry.</title>
          <description>"The world never stops spinning, and we never stop learning. Just like you! Check out the latest, from Ellipsis Drive."</description>
          <link rel="canonical" href="https://ellipsis-drive.com/blog/" />
        </Helmet>
      </div>
    )
  }
}

const getLastUrl = function (d_url) {
  if (!d_url.includes("ellipsis-drive.com")) {
    return d_url
  } else {
    const lastrmStr = d_url.substring(0, d_url.length - 1)
    const lastseg = lastrmStr.substring(lastrmStr.lastIndexOf("/") + 1)
    return lastseg
  }
}

const htmlSerializer = function (type, element, content, children, key) {
  switch (type) {
    case "paragraph":
      return (
        <p key={key} className="mb-6 text-333333 text-lg font-normal">
          {children}
        </p>
      )
    case "heading2":
      return (
        <h2 key={key} className="title30 text-black mb-8">
          {children}
        </h2>
      )
    // case "strong":
    //   return (
    //     <p key={key} className="text-lg font-semibold text-111827">
    //       {children}
    //     </p>
    //   )
    case "list-item":
      return (
        <li key={key} className="ml-8 list-decimal mb-3">
          {children}
        </li>
      )
    case "o-list-item":
      return (
        <li key={key} className="ml-8 list-decimal mb-3">
          {children}
        </li>
      )
    case "group-o-list-item":
      return (
        <ul key={key} className="mb-6">
          {children}
        </ul>
      )
    case "img":
      return <img key={key} className="mb-16" src={element.data.url} />
    case "hyperlink":
      return (
        <a
          key={key}
          className="text-4F46E5 text-lg font-medium underline"
          href={getLastUrl(element.data.url)} target="_blank"
        >
          {children}
        </a>
      )
    default:
      return null
  }
}

const Blog = ({ location, data }) => {
  console.log("loc_data:", location, data)
  let locationParts = location.pathname.split('/');
  let articleUid = locationParts[locationParts.length - 1];

  let article = data.allPrismicArticle.nodes.find((x) => x.uid === articleUid);
  console.log("MYMYMY")
  if (!article) {
    console.log("welwel")
    return null;
  }

  return (
    <Layout contentClassName="bg-F9FAFB">
      <section className="section__container pb-14">
        <div className="relative z-10 max-w-760 mx-auto">
          <div className="text-center mb-4">
            {article && article.tags && article.tags.map((item, index) => {
              return (
                <h4 className="inline-block uppercase text-4F46E5 text-base font-semibold text-center" key={index}>
                  {/* {"item"}{article.tags.length - 1 !== index && ","} */}
                  {/* Introducing */}
                  {item}{index !== article.tags.length - 1 && ', '}
                </h4>
              )
            })}
          </div>
          <h1 className="title36 text-center mb-8 text-111827">
            {article.data.title.text}
          </h1>
          <img src={article.data.featured_image.url} style={{ width: "100%", height: "auto" }} className="mb-10" />
          <RichText
            render={article.data.text.richText}
            htmlSerializer={htmlSerializer}
          />
        </div>
      </section>
    </Layout>
  )
}


export const pageQuery = graphql`
query BlogQuery {
  allPrismicArticle(sort: {fields: data___date, order: DESC}) {
    nodes {
      tags
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

export default Blog
