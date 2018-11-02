import createContactObject from "./contact-form"
import createContactElement from "./contact"
import domInjector from "./contact-list"



const apiHandler = {
  createNewContact: function (input) {
    return fetch("http://localhost:8088/contacts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
    }
  )
  .then(newContactObject => createContactElement(newContactObject))
  .then(contactElement => domInjector(contactElement))
}
// ,
//   loadCurrentContacts: function () {
//     return fetch("http://localhost:8088/contacts/") 
//     .then(contactsJSON => contactsJSON())
//     .then(contactsJS => {
//         createContactElement(contactsJS)
//     })
//     .then(contactElements => domInjector(contactElements)) 
//   }
}

export default apiHandler