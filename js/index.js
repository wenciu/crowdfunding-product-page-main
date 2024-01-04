///ELEMENTS

// BACK PROJECT BUTTON
const backBtn = document.querySelector(".back-btn");

// BOOKMARK BUTTON
const bookBtn = document.querySelector(".book-btn");

// SELECT REWARD BUTTON
const rewardBtn = document.querySelectorAll(".reward-btn");

// PLEDGE INPUTS
const inputs = document.querySelectorAll("input");

// MODAL OVERLAY
const overlay = document.querySelector(".modal-overlay");

// MODAL CONTAINER
const modal = document.querySelector(".modal-container");

// HIDE MODAL ON PAGE LOAD

window.onload = function () {
  modal.style.display = "none";
  overlay.style.display = "none";
};

// MODAL CLOSE BTN
const closeBtn = document.querySelector(".close-btn");

bookBtn.addEventListener("click", () => {
  if (bookBtn.innerHTML === "Bookmark") {
    bookBtn.innerHTML = "Bookmarked";
    bookBtn.style.fontWeight = "bold";
    bookBtn.style.backgroundColor = "#f4f8f9";
    bookBtn.style.color = "#167875";
  } else {
    bookBtn.innerHTML = "Bookmark";
    bookBtn.style.fontWeight = "normal";
    bookBtn.style.backgroundColor = "$border";
    bookBtn.style.color = "$dark-gray";
  }
});

//---------------------------------------//
// RADIO BUTTONS-HIDDEN DIVS FUNCTIONALITY

// HIDDEN DIVS
const hiddenDivs = document.querySelectorAll(".bottom-hidden");
// CARDS CONTAINERS
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  const radioBtns = card.querySelectorAll('input[name="radio"]');

  // Add click event listeners to all radio buttons
  radioBtns.forEach(function (radioBtn) {
    radioBtn.addEventListener("click", function () {
      // Get the target div ID from the data-target attribute
      const targetDivId = this.getAttribute("data-target");

      // Hide divs with if IDs do not match
      hiddenDivs.forEach(function (div) {
        div.style.display = "none";
      });

      // Show the target div
      const targetDiv = document.getElementById(targetDivId);
      if (targetDiv) {
        targetDiv.style.display = "flex";
        card.style.borderStyle = "5px solid dotted";
      }
    });
  });
});
//---------------------------------------//

// SUCCESS MODAL CONTAINER
const successModal = document.querySelector(".success-modal-container");

// GOT IT BTN
const gotItBtn = document.querySelector(".gotIt-btn");

// OPEN 'BACK THIS PROJECT' MODAL

backBtn.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

rewardBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal.style.display = "block";
    overlay.style.display = "block";
  });
});

/// EVENT LISTENERS
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

gotItBtn.addEventListener("click", () => {
  successModal.style.display = "none";
});

// DONATE PROJECT

const inputField1 = document.querySelector(".input-field-1");
const inputField2 = document.querySelector(".input-field-2");
const continueBtn = document.querySelectorAll(".continue");
const totalSumElement = document.querySelector(".total-value");
const itemsLeftElement1 = document.querySelector(".left-1");
const itemsLeftElement11 = document.querySelector(".left-1-1");
const itemsLeftElement2 = document.querySelector(".left-2");
const itemsLeftElement22 = document.querySelector(".left-2-2");

// Event listener to add input value to Total Sum

// Initial value - total sum
let totalSum = 89.914;
totalSumElement.textContent = totalSum;

// Initial value = left items
let itemsLeft1 = 101;
let itemsLeft2 = 64;

continueBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const selectedCounter = btn.getAttribute("data-counter");

    // Get values from the input fields
    const value1 = parseInt(inputField1.value);
    const value2 = parseInt(inputField2.value);

    const minValue1 = 25; // minimum value for inputField1
    const minValue2 = 75; // minimum value for inputField2

    // Check if input values are empty or less than a unique minimum value
    if (
      isNaN(value1) ||
      isNaN(value2) ||
      value1 < minValue1 ||
      value2 < minValue2
    ) {
      alert(
        "Please enter valid input values that meet the minimum requirements."
      );
      return; // Prevent further execution if values are empty
    }

    // Add the input values to the existing value
    totalSum += value1 + value2;

    // Update the existing value display
    totalSumElement.textContent = totalSum;

    // Clear the input fields once value added
    inputField1.value = "";
    inputField1.value = "";

    // Update available items left - Element 1

    if (selectedCounter === "value1") {
      if (itemsLeft1 > 0) {
        itemsLeft1 -= 1;
        itemsLeftElement1.textContent = itemsLeft1;
        itemsLeftElement11.textContent = itemsLeft1;
      } else {
        alert("No items left!");
      }
    } else if (selectedCounter === "value2") {
      // Update available items left - Element 2
      if (itemsLeft2 > 0) {
        itemsLeft2 -= 1;
        itemsLeftElement2.textContent = itemsLeft2;
        itemsLeftElement22.textContent = itemsLeft2;
      } else {
        alert("No items left!");
      }
    }
  });
});

//---------------------------------------//
