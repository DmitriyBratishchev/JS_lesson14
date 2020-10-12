'use strict'


const printClick = ['клик', "клика", "кликов"];

function getEnding(num, typeEndings) {
  if (11 <= num%100 && num%100 <= 14) {
    return typeEndings[2];
  }
   else if(num%10 === 2 || num%10 === 3 || num%10 === 4) {
    return typeEndings[1];
  }
  else if(num%10 === 1){
    return typeEndings[0];
  }
   else {
    return typeEndings[2];
  }
}

function counter() {
  let i = 0;
  return function (){
	  return ++i;
  }
}

export {counter, getEnding, printClick};
