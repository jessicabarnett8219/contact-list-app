/*
    Name: contact-form.js
    Purpose: One function that creates an object out of the values users enter into the input fields
*/



const createContactProps = (event) => {
  // obtain reference to input fields
  const nameInput = document.querySelector("#nameInput")
  const phoneInput = document.querySelector("#phoneInput")
  const addressInput = document.querySelector("#addressInput")
  let newContactProps

  if(nameInput.value === "" || phoneInput.value === "" || addressInput.value === "") {
    alert("No fields can be left blank")
  } else
      newContactProps = {
      name: nameInput.value,
      phoneNumber: phoneInput.value,
      address: addressInput.value
}
return newContactProps
}

export default createContactProps
// dependency in main.js


