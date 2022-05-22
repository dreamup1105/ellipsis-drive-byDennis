import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { JoinCommunity } from "../components/JoinCommunity"
import { CustomButton } from "../components/Common/CustomBtn/CustomButton"
import Phone from "../images/svg/contactsPhone.svg"
import Email from "../images/svg/contactsMail.svg"
import HeaderRightGrid from "../images/svg/headerRightGrid.svg"

import { createContact } from "../api/api"
import { EMAIL_PATTERN } from "../constants/patterns.constants"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us - Get in touch to start your geospatial journey!</title>
          <description>"Are you interested in exploring how Ellipsis Dive can create value and joy for your organization? Get in touch with our team to get your questions answered."</description>
          <link rel="canonical" href="https://ellipsis-drive.com/contact/" />
        </Helmet>
      </div>
    )
  }
}

const Contact = () => {
  const [loading, setLoading] = React.useState(false)
  const onSubmit = async e => {
    e.preventDefault()
    if (loading) {
      return
    }
    const name = e.target[0].value.trim()
    const email = e.target[1].value.trim()
    const company = e.target[2].value.trim()
    const website = e.target[3].value.trim()
    const message = e.target[4].value.trim()

    const isEmail = EMAIL_PATTERN.test(email)

    if (name && email && company && website && message) {
      if (!isEmail) {
        toast.warn("Email not right!")
        return
      }
      try {
        setLoading(true)
        const response = await createContact({
          email,
          attributes: {
            FIRSTNAME: name,
            MESSAGE: message,
            COMPANY_NAME: company,
            WEBSITE: website,
          },
        })
        if (response) {
          toast.success("Success")
        }
      } catch (error) {
        if (error) {
          toast.error(`${error.response.data.message}`)
        }
      } finally {
        setLoading(false)
      }
    } else {
      toast.warn("Please fill all fields")
    }
  }

  return (
    <Layout>
      <aside className="relative z-10 bg-F9FAFB pb-28 max810:pb-14 max700:pb-8">
        <div className="width__container section__container">
          <div className="flex justify-between py-16 px-12 bg-F6F8FA rounded-2xl shadow-xl relative z-10 max700:flex-wrap max700:shadow-none max700:bg-transparent max700:p-0">
            <div className="max--440 w-full mr-4 max700:mb-16 max700:mx-auto max440:mb-8">
              <h2 className="title30 text-111827 mb-3">We’re here to help!</h2>
              <p className="text-333333 text-lg mb-8">
                Are you interested in exploring how Ellipsis Dive can create
                value and joy for your organization? Get in touch with our team
                to get your questions answered.
              </p>
              <div className="mb-6">
                <p className="text-333333 text-lg flex items-center">
                  <Email />
                  <span className="ml-3">info@ellipsis-drive.com</span>
                </p>
              </div>
              <div>
                <p className="text-333333 text-lg">
                  Have technical questions about Ellipsis Drive?
                </p>
                <a href="https://docs.ellipsis-drive.com/" className="text-111827 text-lg underline">
                  View our Help Center
                </a>
              </div>
            </div>
            <form
              onSubmit={onSubmit}
              className="max-w-560 w-full max700:mx-auto"
            >
              <input className="formFields" placeholder="Name" />
              <input className="formFields" placeholder="Email" />
              <input className="formFields" placeholder="Company" />
              <input className="formFields" placeholder="Website" />
              <textarea className="formFields h-120" placeholder="Message" />
              <CustomButton
                className="px-4 py-3 bg-1976D2 hover:bg-045CB4 text-white max500:w-full"
                text={loading ? "Loading" : "Submit"}
                button={true}
              />
            </form>
          </div>
        </div>
        <HeaderRightGrid className="absolute left-0 bottom-0 max700:hidden" />
      </aside>
      <JoinCommunity
        className="bg-F9FAFB pb-28 max810:pb-14"
        leftBackgroundBlock={false}
      />
    </Layout>
  )
}

export default Contact
