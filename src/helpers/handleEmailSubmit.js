import { createContact } from "../api/api"
import { EMAIL_PATTERN } from "../constants/patterns.constants"

export const handleEmailSubmit = async (email, toast) => {
  const isEmail = EMAIL_PATTERN.test(email)
  console.log("Email confirm: ", isEmail)
  if (isEmail) {
    const data = JSON.stringify({ email: email })
    try {
      const response = await createContact(data)
      if (response) {
        toast.success("Thanks for subscribing!")
      }
    } catch (error) {
      if (error) {
        toast.error(`${error.response.data.message}`)
      }
    }
  } else {
    toast.warn("Email not right!")
  }
}
