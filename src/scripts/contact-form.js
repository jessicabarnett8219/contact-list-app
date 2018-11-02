
const createContactObject = () => {
  // obtain reference to input fields
  const nameInput = document.querySelector("#nameInput")
  const phoneInput = document.querySelector("#phoneInput")
  const addressInput = document.querySelector("#addressInput")

  // creating a new object that will be added to the database in another module
  let newContact = {
  name: nameInput.value,
  phoneNumber: phoneInput.value,
  address: addressInput.value
}
return newContact
}

export default createContactObject


