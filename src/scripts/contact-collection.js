import createContactElement from "./contact-form"



const apiHandler = {
  createNewContact: function () {
    return fetch("http://localhost:8088/contacts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(createContactObject())
    }
  )
  .then(newContact => createContactElement(newContact))
  .then(contactElement => domInjector(contactElement))
},
  loadCurrentContacts: function () {
    return fetch("http://localhost:8088/contacts/") 
    .then(contactsJSON => contactsJSON())
    .then(contactsJS => {
        createContactElement(contactsJS)
    })
    .then(contactElements => domInjector(contactElements)) 
  }
}

export default apiHandler