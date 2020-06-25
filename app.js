// VARIABLES

let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name,%20picture,email,%20location,%20phone,%20dob%20&noinfo%20&nat=US`;
const gridContainerCards = document.querySelector('#grid-container > .cards');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

// search bar VARIABLES
const input = document.querySelector('.searchInput');



// Fetching api and then printing to html
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.results)
    .then(filter)
    .then(displayEmployees)

    .catch(err => console.log(err))

function displayEmployees(employeeData) {
    employees = employeeData;

    let employeeHTML = '';

// looping through each object and adding html
    employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

        employeeHTML += `
            <div class="card" data-index="${index}">
                <img class="avatar" src="${picture.large}" />
                <div class="text-container">
                    <h2 class="cardName">${name.first} ${name.last}</h2>
                    <p class="email">${email}</p>
                    <p class="address">${city}</p>
                </div>
            </div>
        `
    });

    gridContainerCards.innerHTML = employeeHTML;
}


// creates the information for the content modal

function displayModel (index) {
  // oibject destrucurting
  let {name, dob, phone, email, location: {city, street, state, postcode}, picture} = employees[index];

  let date = new Date(dob.date);

  const modalHTML = `
  <img class = 'avatar' src = '${picture.large}' />
  <div class = 'text-container'>
    <h2 class = 'name'>${name.first} ${name.last}</h2>
    <p class = 'email'>${email}</p>
    <p class = 'address'>${city}</p>

    <hr style='width:0'>
    <p>${phone}</p>
    <p class ='address'> ${street.number} ${street.name}, ${state}, ${postcode} </p>
    <p>Birthday : ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
  `;

  overlay.classList.remove('hidden');
  modalContainer.innerHTML = modalHTML
}

// click event which opens a pop up
gridContainerCards.addEventListener('click', e =>{
  if(e.target !== gridContainerCards) {
    const card = e.target.closest('.card');
    const index = card.getAttribute('data-index');
    displayModel(index)
  }
})

// click event to close the pop up

modalClose.addEventListener('click', () =>{
  overlay.classList.add('hidden');
});

// filter function
function filter (response) {
  if(response.ok){
  for(let i = 0; i < cards.length; i++){
    let employeeName = cards[i].querySelector('.text-container h2').innerHTML;
    console.log(employeeName);
  }
}
}
