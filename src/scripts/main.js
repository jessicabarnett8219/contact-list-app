import createContactObject from "./contact-form"

document.querySelector("#submitBtn").addEventListener("click", (event) => {
  console.log(createContactObject())
})



// event listener on the submit button that executes any other functions. dependency on dom injection module and contact form module.