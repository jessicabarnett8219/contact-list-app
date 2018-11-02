// export function with fetch call to the API to GET Data. and print to DOM. Dependency on DOM injection module

const getContactTest = () => {
  fetch("http://localhost:8088/contacts/1") // Fetch from the API
  .then(contact => contact.json())  // Parse as JSON
  .then(contactJS => {
      // calling the function that creates the HTML component and adds all the entries to the DOM
      console.log(contactJS)
  })
}

export default getContactTest