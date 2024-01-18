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

// SUCCESS MODAL CONTAINER
const successModal = document.querySelector(".success-modal-container");

// GOT IT BTN (Thanks Container)
const gotItBtn = document.querySelector(".gotIt-btn");

// MODAL CLOSE BTN
const closeBtn = document.querySelector(".close-btn");

// HIDE DONATE MODAL CONTAINER ON PAGE LOAD

window.onload = function () {
  modal.style.display = "none";
  overlay.style.display = "none";
  successModal.style.display = "none";
  bookBtn.innerHTML = "Bookmark";
};

//------ BOOKMARK BUTTON FUNCTIONALITY ------//
// bookBtn.innerHTML = "Bookmark";

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

//------ RADIO BUTTONS-HIDDEN DIVS FUNCTIONALITY ------//

// CARDS CONTAINERS
const cards = document.querySelectorAll(".card");

function toggleBorderStyle(selectedCard) {
  cards.forEach(function (activeCard) {
    if (activeCard === selectedCard) {
      activeCard.classList.add("selected");
    } else {
      activeCard.classList.remove("selected");
    }
  });
}

cards.forEach(function (card) {
  // Update to listen for clicks on the parent card
  card.addEventListener("click", function () {
    // Find the radio button inside the clicked card
    const radioBtn = card.querySelector('input[name="radio"]');
    if (radioBtn) {
      // Trigger a click on the radio button
      radioBtn.click();

      // Hide all hidden divs
      cards.forEach(function (div) {
        const hiddenDiv = div.querySelector(".bottom-hidden");
        if (hiddenDiv) {
          hiddenDiv.style.display = "none";
        }
      });

      // Show the selected hidden div
      const targetHiddenDivId = radioBtn.getAttribute("data-target");
      const hiddenDiv = document.getElementById(targetHiddenDivId);
      if (hiddenDiv) {
        hiddenDiv.style.display = "flex";
      }

      // Toggle border style based on radio button selection
      toggleBorderStyle(card);
    }
  });
});

//------ OPEN 'BACK THIS PROJECT' MODAL FUNCTIONALITY ------//

backBtn.addEventListener("click", () => openModal());

rewardBtn.forEach((btn) => btn.addEventListener("click", () => openModal()));

function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
  setTimeout(function () {
    overlay.style.opacity = "1";
    modal.style.opacity = "1";
  }, 50);
}

/// EVENT LISTENERS
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
  setTimeout(function () {
    overlay.style.opacity = "0";
    modal.style.opacity = "0";
  }, 50);
});

gotItBtn.addEventListener("click", () => {
  successModal.style.display = "none";
  overlay.style.display = "none";
  setTimeout(function () {
    overlay.style.opacity = "0";
  }, 50);
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
let totalSum = 89914;
totalSumElement.textContent = totalSum.toLocaleString("en-US");

// Initial value = left items
let itemsLeft1 = 101;
let itemsLeft2 = 64;

continueBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const selectedCounter = btn.getAttribute("data-counter");

    // Get values from the input fields
    const value1 = parseInt(inputField1.value) || 25;
    const value2 = parseInt(inputField2.value) || 75;

    const minValue1 = 25; // minimum value for inputField1
    const minValue2 = 75; // minimum value for inputField2

    // Check if input values are empty or less than a minimum value
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
    totalSumElement.textContent = totalSum.toLocaleString("en-US");

    // Clear the input fields once value added
    inputField1.value = "";
    inputField1.value = "";

    // Update available items left - Element 1

    if (selectedCounter === "value1") {
      if (itemsLeft1 > 0) {
        itemsLeft1 -= 1;
        itemsLeftElement1.textContent = itemsLeft1;
        itemsLeftElement11.textContent = itemsLeft1;
        closeModalDelay();
      } else {
        alert("No items left!");
      }
    } else if (selectedCounter === "value2") {
      // Update available items left - Element 2
      if (itemsLeft2 > 0) {
        itemsLeft2 -= 1;
        itemsLeftElement2.textContent = itemsLeft2;
        itemsLeftElement22.textContent = itemsLeft2;
        closeModalDelay();
      } else {
        alert("No items left!");
      }
    }

    // Function to hide the element after a specified delay

    function closeModalDelay() {
      setTimeout(function () {
        modal.style.display = "none";
        successModal.style.display = "flex";
      }, 500);
    }
  });
});

//------ OPEN MOBILE MENU ------//

const mobileMenu = document.querySelector(".mobile-container");
const mobileMenuBtn = document.querySelector(".menu-btn");

mobileMenuBtn.addEventListener("click", function () {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling on the body when the menu is open
  } else {
    mobileMenu.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling on the body when the menu is closed
  }
});
