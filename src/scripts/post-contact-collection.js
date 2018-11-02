// export function with fetch call to post data to API. dependency on contact form module

import createContactObject from "./contact-form"

// function to Post to database
const postContact = () => {
    fetch("http://localhost:8088/contacts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(createContactObject())
    }
  )
}

export default postContact 
