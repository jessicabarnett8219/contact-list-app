// export function with fetch call to post data to API. dependency on contact form module

import createContactObject from "contact-form.js";

fetch("http://localhost:8088/contacts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(createContactObject())
})