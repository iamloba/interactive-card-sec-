"use strict";

const numbercard = document.getElementById("card-number");
const namecard = document.getElementById("front-card-name");
const expirycard = document.getElementById("expiry-date");
const numbercvv = document.getElementById("cvv-number");
const Continue = document.querySelector(".continue");
const Form = document.querySelector(".form-div");
const btncontinue = document.querySelector(".continue-btn");
const errorField = document.querySelector(".error-field");

const validate = (e) => {
  //remove any already displayed error
  errorField.forEach(function (error) {
    error.classlist.remove("invalid");
  });

  //loop through all inputs to check the value length
  document.querySelectorAll("form input").forEach(function (input) {
    if (input.value.length < 1) {
      input.nextElementSibling.classlist.toggle("invalid");
    }
  });

  //prevent submit only if there are errors shown
  let errorCount = document.querySelectorAll(".error-field.invalid").length;
  if (errorCount) {
    e.preventDefault();
  }
};

const closeContinue = function () {
  Continue.classList.add("hidden");
  Form.classList.remove("hidden");
};

btncontinue.addEventListener("click", closeContinue);

document
  .querySelector(".submit-text-box")
  .addEventListener("click", function () {
    namecard.textContent = document.getElementById("input-class").value;

    numbercard.textContent = document.getElementById("input-number").value;

    expirycard.textContent = `${document.getElementById("month-box").value}/${
      document.getElementById("year-box").value
    }
    `;
    numbercvv.textContent = document.getElementById("cvc-input-box").value;

    Continue.classList.remove("hidden");
    Form.classList.add("hidden");
  });

document.querySelector(".submit-btn").addEventListener("click", validate);
