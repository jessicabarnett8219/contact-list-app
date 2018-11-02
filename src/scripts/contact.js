// exports function to build html component. dependecy on get-contact-collection which contains function to pull data from API

import getContact from "./get-contact-collection"

const contactElementMaker = () => {
  getContact(1)
  let contactSection = document.createElement("section")
  contactSection.innerHTML = `
  <h2>${contacts[0].name}</h2>
  <p>${contacts[0].phoneNumber}</p>
  <p>${contacts[0].address}</p>
  `
  return contactSection
}

export default contactElementMaker