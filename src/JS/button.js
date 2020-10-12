'use strict'

import { counter, getEnding, printClick } from "./lib.js";

let clickCounter = counter();

export function clickButton() {
  console.log("click");
  let i = clickCounter();
  document.querySelector(`.counter_button`).textContent = `${i} ${getEnding(i, printClick)}`;
}



