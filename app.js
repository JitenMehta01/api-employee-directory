///////// VARIABLES

let employee = [];
const apiLink = `https://randomuser.me/api/?results=12&inc=name, picture,email, location, phone, dob &noinfo &nat=US`;
const grid = document.getElementById('grid-container');
const overlay = document.querySelector('.overlay');
const modelContent = document.querySelector('.modal-content');
const modelClose = document.querySelector('.modal-close');


// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------


fetch(apiLink)
.then(res => res.json())
.then(data => data.results)
.then(displayEmployees​)
.catch(err => console.log(err));

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function displayEmployees​ = (employeeData)​{
  employee = employeeData;

  let employeeHTML​ = ''
}
