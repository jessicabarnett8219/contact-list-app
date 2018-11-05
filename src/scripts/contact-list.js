/*
    Name: contact-list.js
    Purpose: One function that appends the contact element to the output section in the dom.
*/

import contactElementMaker from "./contact"

const domInjector = (object) => {
  let outputSection = document.querySelector(".output")
  // calling the contactElementMaker function (from contact.js)
  let contactElement = contactElementMaker(object)
  outputSection.appendChild(contactElement)
  return outputSection
}

export default domInjector
// dependency in main.js