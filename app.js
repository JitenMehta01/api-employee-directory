// VARIABLES

let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name,%20picture,email,%20location,%20phone,%20dob%20&noinfo%20&nat=US`;
const gridContainer = console.log(document.getElementById('grid-container'));;
const overlay = console.log(document.querySelector('.overlay'));
const modalContainer = console.log(document.querySelector('.modal-content'));
const modalClose = console.log(document.querySelector('.modal-close'));

// fetch data using api

fetch(urlAPI)
.then(res => res.json())
.then(data => console.log(data.results))
.then(displayEmployees)
.catch(err => console.log(err));

function displayEmployees(employeeData) {
  employees = employeeData;

  let employeeHTML = '';

  employees.forEach((employee, index) =>{
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;

    employeeHTML += `
    <div class = 'card' data-index='${index}'>
      <img class = 'avatar' src ='${picure.large}' />
      <div class = 'text-container'>
        <h2 class = 'name'>${name.first} ${name.last}</h2>
        <p class = 'email'>${email}</p>
        <p class = 'address'>${city}</p>
      </div>
    </div>
    `
  });

  gridContainer.innerHTML = employeeHTML;
}
