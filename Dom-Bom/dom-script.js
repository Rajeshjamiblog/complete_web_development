// alert("connected");

// let hold = document.getElementById("changeTextButton");
// console.log(hold);

// Adding an event listener to the button with id "changeTextButton"
// When the button is clicked, it logs the button element itself using a regular function
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this); // 'this' refers to the button element
  });

// Adding another event listener to the same button using an arrow function
// When the button is clicked, it logs 'this' which in the context of an arrow function is the global object (or undefined in strict mode)
document.getElementById("changeTextButton").addEventListener("click", () => {
  console.log(this); // 'this' refers to the global object (or undefined in strict mode)
});

// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    //paragraph.innerHTML = "The text has changed!";
    paragraph.textContent = "The text paragraph has changed!";
  });

// example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    //console.log(citiesList.firstElementChild.classList);
    citiesList.firstElementChild.classList.add("highlight");
  });

// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});

//example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });
