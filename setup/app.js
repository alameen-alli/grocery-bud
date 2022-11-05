// ****** SELECT ITEMS **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = documnetg.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    console.log(grocery.value);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
