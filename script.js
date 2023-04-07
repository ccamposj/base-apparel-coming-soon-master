"use strict";

const formEl = document.querySelector(".subscription__form");
const inputEl = document.querySelector(".subscription__input");
const errorMsgEl = document.querySelector(".subscription__error-icon");
const errorIconEl = document.querySelector(".subscription_error-msg");

formEl.addEventListener("submit", function (event) {
  if (!inputEl.checkValidity()) {
    event.preventDefault();
    errorMsgEl.classList.remove("hidden");
    errorIconEl.classList.remove("hidden");
    inputEl.classList.add("invalid");
  } else {
    errorMsgEl.classList.add("hidden");
    errorIconEl.classList.add("hidden");
    inputEl.classList.remove("invalid");
  }
});
