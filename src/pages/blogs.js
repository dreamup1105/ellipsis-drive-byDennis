import * as React from "react"
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import moment from "moment"
import Layout from "../components/Layout"
import HeaderRightGrid from "../images/svg/headerRightGrid.svg"
import Select from 'react-select'
// import styled from 'styled-components';


// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]


class Application extends React.Component {

  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Blog - Latest articles, updates and press releases in the geospatial industry.</title>
          <description>"The world never stops spinning, and we never stop learning. Just like you! Check out the latest, from Ellipsis Drive."</description>
          <link rel="canonical" href="https://ellipsis-drive.com/blogs/" />
        </Helmet>
      </div>
    )
  }
}


// const MyComponent = () => (
//   <Select options={options} />
// )


const Blogs = ({ data }) => {
  const initialValue = data.allPrismicArticle.nodes
  const [articles, setArticles] = useState(initialValue)
  // console.log("Data------------", articles[13])
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

  const itemArry = []
  initialValue.map((article, index) => {
    itemArry.push(article.tags[0]);
  });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  var unique = itemArry.filter(onlyUnique);// get Unique select items

  const options = [];

  for (let opt of unique) {
    var mopt = { value: opt, label: opt };
    options.push(mopt);
  }

  const navigateToArticle = article => {
    return () => navigate(`/blog/${article.uid}`)
  }

  const [state, setState] = useState({
    selectedOption: 0,
  });

  const handleChange = selectedOption => {
    setState({ selectedOption });

    var newArry = []
    initialValue.map((article, index) => {
      if (article.tags.length == 1) {
        if (selectedOption.find(e => e.value == article.tags[0]) != null) {
          newArry.push(article)
        }
      } else {
        for (let mtag of article.tags) {
          if (selectedOption.find(e => e.value == mtag) != null) {
            newArry.push(article)
            break;
          }
        }
      }
    })
    // newArry.push(filterArticles)
    if (selectedOption.length != 0) {
      setArticles(newArry)
    } else {
      setArticles(initialValue)
    }
    console.log(`Option selected:`, selectedOption);
  };

  const { selectedOption } = state;
  return (
    <Layout>
      <div className="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        <div className="flex flex-col relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              The world never stops spinning, and we never stop learning. Just like you! Check out the latest, from Ellipsis Drive.
            </p>
          </div>
          {/* <div>
            {MyComponent}
          </div> */}
          <div class="mt-9 w-full px-2">
            <div class="w-1/3 float-right mr-1">
              <Select
                isMulti={true}
                value={selectedOption}
                onChange={handleChange}
                options={options}
              />
              {selectedOption.length ? (
                <div>
                  <ul>
                  </ul>
                </div>) : ''
              }
            </div>
          </div>
          <div className="mt-5 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {articles.map((article, index) => (
              <div
                onClick={navigateToArticle(article)}
                key={index}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={article.data.featured_image.url}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        {
                          article.tags.length > 0 && article.tags.map((item, index) => {
                            return <span className="font-medium text-indigo-600" key={index}>
                              {item}{index !== article.tags.length - 1 && ', '}
                            </span>
                          })
                        }
                      </div>
                      <time className="text-sm">
                        {moment(article.data.date).format("ll")}
                      </time>
                    </div>
                    <p className="text-xl  mt-2 font-semibold text-gray-900">
                      {article.data.title.text}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {
                        // article.data.text.richText[2].text.slice(0, 200)}...
                        articleText[index].slice(0, 200)
                      }...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <HeaderRightGrid className="absolute left-0 bottom-0 max700:hidden" />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query BlogsQuery {
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

export default Blogs
