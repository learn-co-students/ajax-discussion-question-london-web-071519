const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

// Find HTML Elements
const addNewPersonButton = document.querySelector(".btn.btn-primary")
const nameH3 = document.querySelector("#fullname")
const emailH4 = document.querySelector("#email")
const streetH4 = document.querySelector("#street")
const cityH4= document.querySelector("#city")
const stateH4 = document.querySelector("#state")
const postcodeH4 = document.querySelector("#postcode")
const phoneH4 = document.querySelector("#phone")
const cellH4 = document.querySelector("#cell")
const dobH4 = document.querySelector("#date_of_birth")


// Event Listeners
addNewPersonButton.addEventListener('click', () => {
  addPersonToPage(getPersonObjFromApi())
})


// Collect Promise with JSON Response and Parse to JS Object
const getPersonObjFromApi = () => {
  return fetch('https://randomuser.me/api/')
          .then(resp => resp.json())
}

// Parse JS Object to Function that adds API data to HTML Tags inner Text
const addPersonToPage = promise => {
 promise.then(result => {
   const person = result.results[0]
   
   nameH3.innerText = fullName(person.name)
   contactDetailsParser(person)
   locationParser(person.location)
   dobH4.innerText = dobFormatter(person.dob.date)
 })
}

const locationParser = personLocation => {
    streetH4.innerText = personLocation.street
    cityH4.innerText = personLocation.city
    stateH4.innerText = personLocation.state
    postcodeH4.innerText = personLocation.postcode
}

const contactDetailsParser = person => {
    emailH4.innerText = person.email
    phoneH4.innerText = person.phone
    cellH4.innerText = person.cell
}

const fullName = nameObject => `${stringCapitalizer(nameObject.title)}. ${stringCapitalizer(nameObject.first)} ${stringCapitalizer(nameObject.last)}`
const stringCapitalizer = string => string[0].toUpperCase() + string.slice(1);
const dobFormatter = dob => dob.split(':')[0].split('T')[0].split('-').reverse().join("-")




