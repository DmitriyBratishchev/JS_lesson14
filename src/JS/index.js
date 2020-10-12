'use strict'

import {clickButton} from "./button.js";
import "./../CSS/style.css";

let button = document.createElement("button");
button.className = 'counter_button'
button.innerHTML = "Эта кнопка будет считать клики по ней.";

document.querySelector("body").appendChild(button);

button.addEventListener('click', clickButton )
