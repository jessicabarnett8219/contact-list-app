
const contactElementMaker = (contactObject) => {
  let contactSection = document.createElement("section")
  contactSection.innerHTML = `
  <h2>${contactObject.name}</h2>
  <p>${contactObject.phoneNumber}</p>
  <p>${contactObject.address}</p>
  `
  return contactSection
}

export default contactElementMaker