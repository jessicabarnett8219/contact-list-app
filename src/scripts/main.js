// event listener on the submit button that executes any other functions. Dependency on post-contact-collection module and dom injection module.

import apiHandler from "./contact-collection";
import createContactObject from "./contact-form";
import contactElementMaker from "./contact";
import domInjector from "./contact-list";


document.querySelector("#submitBtn").addEventListener("click", (event) => {
  console.log("the button was clicked")
  let newContactObject = createContactObject(event)
  apiHandler.createNewContact(newContactObject)
  let newContactElement = contactElementMaker(newContactObject)
  domInjector(newContactElement)
})





