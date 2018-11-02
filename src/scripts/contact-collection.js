import createContactObject from "./contact-form"
import contactElementMaker from "./contact"
import domInjector from "./contact-list"



const apiHandler = {
  createNewContact: function (object) {
    return fetch("http://localhost:8088/contacts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
    }
  )
  .then(response => console.log(response))
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