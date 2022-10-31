"use strict";
const btnDice = document.querySelector(".dice-btn");
const adviceN = document.getElementById("advice-num");
const txtAdvice = document.getElementById("advice-txt");
const url = "https://api.adviceslip.com/advice";

function getAdvice() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceNum = adviceData.slip.id;
      const advice = adviceData.slip.advice;

      adviceN.textContent = adviceNum;
      txtAdvice.innerHTML = `${advice}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

getAdvice();

btnDice.addEventListener("click", () => {
  getAdvice();
});
