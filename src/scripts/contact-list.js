
import contactElementMaker from "./contact"

const domInjector = (object) => {
  let outputSection = document.querySelector(".output")
  let contactElement = contactElementMaker(object)
  outputSection.appendChild(contactElement)
  return outputSection
}

export default domInjector