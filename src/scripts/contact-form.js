// exports function to obtain user input and validate it turn it into an object. no dependencies.

// obtain reference to input fields
const createContactObject = () => {
  const nameInput = document.querySelector("#nameInput")
  const phoneInput = document.querySelector("#phoneInput")
  const addressInput = document.querySelector("#addressInput")

  let newContact = {
  name: nameInput.value,
  phoneNumber: phoneInput.value,
  address: addressInput.value
}
return newContact
}

export default createContactObject


