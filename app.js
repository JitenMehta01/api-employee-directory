/********************************************************************************************************************
VARAIBLES
*********************************************************************************************************************/



let employees = []; // employee data will added to this var via the displayEmployees function
const urlAPI = `https://randomuser.me/api/?results=12&inc=name,%20picture,email,%20location,%20phone,%20dob%20&noinfo%20&nat=US`;

const gridContainerCards = document.querySelector('#grid-container > .cards'); // employee cards
const overlay = document.querySelector('.overlay'); // generates a clickable pop up window
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

const input = document.querySelector('.searchInput'); // search bar to filter names

// 



// Fetching api and then printing to html
fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.results)
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
  <button class = 'carousel-button carousel-button-left'>
  <img class = 'arrow-image' src = 'img/back.svg'>
  </button>
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
    <button class = 'carousel-button carousel-button-right'>
    <img class = 'arrow-image' src = 'img/back.svg'>
    </button>
    <div class = 'carousel-dots'>
    <button class = 'carousel_dot dot-active'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
    <button class = 'carousel_dot'></button>
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


//////////////////////////////////////////////////////////
/// FILTER FUNCTION
/// TWO METHODS HAVE BEEN USED.
/// A FOR LOOP AND FOREACH LOOP



const searchBar = document.getElementById('searchInput');

// FOR EACH
searchBar.addEventListener('keyup', () =>{

  let employeeName = document.getElementsByClassName('cardName');
  let input = searchBar.value.toUpperCase();

  // converts htmlcollection to array
  employeeName = Array.from(employeeName);

  employeeName.forEach((employee) =>{
      if (employee.textContent.toUpperCase().indexOf(input) > -1) {
        employee.closest('.card').style.display = '';
      } else {
        employee.closest('.card').style.display = 'none';
      }
  });

});



// FOR LOOP

// searchBar.addEventListener('keyup', () =>{
//   let cards = document.querySelectorAll('.card');
//   let employeeName = document.getElementsByClassName('cardName');
//   let input = searchBar.value.toUpperCase();
//
//   for(let i = 0; i < employeeName.length; i++){
//     if (employeeName[i].textContent.toUpperCase().indexOf(input) > -1) {
//       cards[i].style.display = '';
//     } else {
//       cards[i].style.display = 'none';
//     }
//   }
//
// });


// clears the search bar value on load.

const clearSearchBr = () =>{
  searchBar.value = '';
}

window.onload = clearSearchBr;
