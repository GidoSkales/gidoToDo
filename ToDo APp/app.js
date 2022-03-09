"use strict";
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
    const userName = prompt("Welcome What's your name");
    if (userName) {
      document.querySelector(".username").textContent = userName;
    } else {
      document.querySelector(
        ".username"
      ).innerHTML = `<strong>Uknown User<br/>Reload to enter your name</strong>`;
    }
  }
});

const input__entry = document.querySelector(".input__text");
const input__search = document.querySelector(".btn-submit");
const todo__entry = document.querySelector(".entry");
const btn__add = document.querySelector(".btn-add");
const container = document.querySelector(".activity__list");

const initApp = () => {
  input__search.addEventListener("click", (event) => {
    event.preventDefault();
  });

  // Following procedural programming style

  const inputEntry = (item) => {
    if (item.value === "") return "";
    else return item.value;
  };

  const updateList = (item) => {
    const div = document.createElement("div");
    div.className = "lists";
    div.innerHTML = `<li class="item">${item}</li><button class="btn btn-rmv">Remove</button>`;
    container.appendChild(div);
  };

  btn__add.addEventListener("click", () => {
    updateList(inputEntry(todo__entry));
    clear();
  });

  const clear = () => {
    const btn__rmv = document.querySelectorAll(".btn-rmv");
    const rmv = Array.from(btn__rmv);
    // console.log(rmv);
    rmv.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        try {
          e.target.parentElement.innerHTML = "";
        } catch (error) {}
      });
    });
  };
};
