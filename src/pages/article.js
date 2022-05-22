import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { navigate } from "gatsby"
import { RichText } from "prismic-reactjs"

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
          href={element.data.url}
        >
          {children}
        </a>
      )
    default:
      return null
  }
}

const Article = ({ location }) => {
  const [state, setState] = React.useState({
    title: { text: "" },
    text: { richText: "" },
  })

  React.useEffect(() => {
    if (!location.state) {
      navigate("/blog")
      return
    }
    setState(location.state.data)
  }, [location])

  return (
    <Layout contentClassName="bg-F9FAFB">
      <section className="section__container pb-14">
        <div className="relative z-10 max-w-760 mx-auto">
          <h4 className="uppercase text-4F46E5 text-base font-semibold text-center">
            Introducing
          </h4>
          <h1 className="title36 text-center mb-8 text-111827">
            {state.title.text}
          </h1>
          <RichText
            render={state.text.richText}
            htmlSerializer={htmlSerializer}
          />
        </div>
      </section>
    </Layout>
  )
}

export default Article
