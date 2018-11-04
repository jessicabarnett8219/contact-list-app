/*
    Name: contact-form.js
    Purpose: One function that creates an object out of the values users enter into the input fields
*/


const createContactObject = (event) => {
  // obtain reference to input fields
  const nameInput = document.querySelector("#nameInput")
  const phoneInput = document.querySelector("#phoneInput")
  const addressInput = document.querySelector("#addressInput")
  let newContact

  if(nameInput.value === "" || phoneInput.value === "" || addressInput.value === "") {
    alert("No fields can be left blank")
  } else
      newContact = {
      name: nameInput.value,
      phoneNumber: phoneInput.value,
      address: addressInput.value
}
return newContact
}

export default createContactObject
// dependency in main.js


