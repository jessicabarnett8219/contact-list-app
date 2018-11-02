// exports function to inject the html component into the API. dependency on HTML component  maker function

import contactElementMaker from "./contact"

const addContactToDOM = () => {
  let contactElement = contactElementMaker()
  let outputSection = document.querySelector(".output")
  outputSection.appendChild(contactElement)
}

export default addContactToDOM