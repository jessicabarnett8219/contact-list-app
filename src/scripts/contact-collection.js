/*
    Name: contact-collection.js
    Purpose: An object with two functions - one to post a new contact to the database and one to get all the contacts from the database and parse to javascript
*/

// no dependencies 

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
},
  loadCurrentContacts: function () {
    return fetch("http://localhost:8088/contacts/") 
    .then(contacts => contacts.json())
  }
}

export default apiHandler
// dependency in main.js