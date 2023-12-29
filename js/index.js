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

      // Hide divs with not matching IDs
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
