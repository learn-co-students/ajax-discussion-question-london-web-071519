const fullname = document.getElementById("fullname");
const createPersonButton = document.querySelector('.btn-primary');
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
/////////////
createPersonButton.addEventListener('click', (e) => {
    console.log('click')
    fetchPerson()
});

function fetchPerson() {
  fetch('https://randomuser.me/api/')
    .then(res =>res.json())
    .then(json => makePerson(json.results[0]))
  } 

function makePerson(person) {
  let profilePic = document.querySelector('#profile_picture')
  profilePic.src = person.picture.medium
  
  let firstName = person.name.first
  let lastName = person.name.last
  fullname.innerText = `${firstName} ${lastName}`

  let dob = person.dob.date.slice(0,10)
  document.querySelector('#date_of_birth').innerText = dob

  let email = person.email
  document.querySelector('#email').innerText = email

  let phone = person.phone
  document.querySelector('#phone').innerText = phone
  let mobile = person.cell
  document.querySelector('#cell').innerText = mobile
  let street = person.location.street
  document.querySelector('#street').innerText = street
  let city = person.location.city
  document.querySelector('#city').innerText = city
  let state = person.location.state
  document.querySelector('#state').innerText = state
  let postCode = person.location.postcode
  document.querySelector('#postcode').innerText = postCode
}