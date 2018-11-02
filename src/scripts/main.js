// event listener on the submit button that executes any other functions. Dependency on post-contact-collection module and dom injection module.

import apiHandler from "./contact-collection";



document.querySelector("#submitBtn").addEventListener("click", (event) => {
  console.log("the button was clicked")
  apiHandler.createNewContact(event)
})





