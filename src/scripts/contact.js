/*
    Name: contact.js
    Purpose: One function that creates an HTML element from an object. It's called in the domInjector function (in contact-list.js)
*/


const contactElementMaker = (contactObject) => {
  let contactElement = document.createElement("section")
  contactElement.innerHTML = `
  <h2>${contactObject.name}</h2>
  <p>${contactObject.phoneNumber}</p>
  <p>${contactObject.address}</p>
  `
  return contactElement
}

export default contactElementMaker
// dependency in contact-list.js