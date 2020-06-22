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

  employees.forEach((employee, index) => {
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;

    employeeHTML​ += `
    <div class="card" data-index="${index}">
    <img class="avatar" src="${picture.large}" />
    <div class="text-container">
    <h2 class="name">${name.first} ${name.last}</h2>
    <p class="email">${email}</p>
    <p class="address">${city}</p>
    </div>
    </div>
    `

    grid.innerHTML = employeeHTML;

  })

}

function displayModel = (index) {

  let {name, dob, phone, email, location, { city, street, state, postcode}, picture} = empployees[index];

  let date = new Date(dob.date);

  const​ modalHTML = ​`
  <img class="avatar" src="${picture.large}" />
  <div class="text-container"><h2 class="name">${name.first} ${name.last}</h2>
  <p class="email">${email}</p><p class="address">${city}</p>
  <hr />
  <p>${phone}</p><p class="address">${street}, ${state} ${postcode}</p>
  <p>Birthday:${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
  </div>  `​;

  overlay.classList.remove(​"hidden"​);
  modalContainer.innerHTML = modalHTML;
}


grid.addEventListener(click, e =>{
  if (e.target !== grid){
    const card = e.target.closest('.card');
    const index = card.getAttribute('data-index');

    displayModel(index);
  }
})

modelClose.addEventListener(​'click'​, () => {  overlay.classList.add(​"hidden"​);});
