// event listener on the submit button that executes any other functions. Dependency on post-contact-collection module and dom injection module.

import apiHandler from "./contact-collection";
import createContactObject from "./contact-form";
import domInjector from "./contact-list";


window.addEventListener("load", (event) => {
  console.log("the page loaded")
  apiHandler.loadCurrentContacts(event)
  .then(contactsArray => {
    contactsArray.forEach(contact => {
      domInjector(contact)
    })
  })
})

document.querySelector("#submitBtn").addEventListener("click", (event) => {
  console.log("the button was clicked")
  let newContactObject = createContactObject(event)
  apiHandler.createNewContact(newContactObject)
  domInjector(newContactObject)
})





