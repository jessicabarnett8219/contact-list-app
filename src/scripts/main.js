/*
    Name: main.js
    Purpose: Sets event listeners that executes the functions from other modules
*/

// TODO form validation (console error), basic styling just to keep each contacts details together, object classes for new entry object, using fragments and being more effecient with appending to the DOM,  further modularize (main.js might have to much happening in each event handler.)

import apiHandler from "./contact-collection";
import domInjector from "./contact-list";
import Contact from "./contact-class"
import createContactProps from "./contact-form";


// on page load, GET fetch call to API with the loadCurrentContacts function (from contact-collection.js), then loops over the data and calls the domInjector function (from contact-list.js) to print them to the DOM.
window.addEventListener("load", (event) => {
  console.log("the page loaded")
  apiHandler.loadCurrentContacts(event)
  .then(contactsArray => {
    contactsArray.forEach(contact => {
      domInjector(contact)
    })
  })
})

// on click of the submit button, creates a new object from the user input using the createNewContact function (from contact.js) then does a POST fetch call to add it to the database using the createNewContact function (from content-collection.js) then prints it to the DOM using the domInjector function (from contact-list.js)
document.querySelector("#submitBtn").addEventListener("click", (event) => {
  console.log("the button was clicked")
  let newContactObject = new Contact (createContactProps(event))
  apiHandler.createNewContact(newContactObject)
  domInjector(newContactObject)
})


// No exports. Entrypoint of the application



