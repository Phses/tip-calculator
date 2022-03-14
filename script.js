"use strict";
const billInput = document.querySelector(".value");
const amountPeopleInput = document.querySelector(".amount-people");
const customPercentInput = document.querySelector(".custom-percent");
const totalValue = document.querySelector(".total");
const amountValue = document.querySelector(".amount");
const btnReset = document.querySelector(".reset");
const btnAddPercent = document.querySelectorAll(".percent-value");
const message = document.querySelector(".message");

btnReset.disabled = true;

let percentValue = 0;

for (let i = 0; i < btnAddPercent.length; i++) {
  btnAddPercent[i].addEventListener("click", function () {
    for (let i = 0; i < btnAddPercent.length; i++) {
      btnAddPercent[i].classList.remove("active");
    }
    percentValue = Number(btnAddPercent[i].value);
    btnAddPercent[i].classList.add("active");
    console.log(percentValue);
  });
}

customPercentInput.addEventListener("input", function (event) {
  percentValue = Number(customPercentInput.value);
});

const calcTip = (value, numberOfPeople) => {
  const tip = ((percentValue / 100) * value) / numberOfPeople;
  return tip.toFixed(2);
};

const calcTotal = (value, numberOfPeople) => {
  const total = Number(calcTip(value, numberOfPeople)) + value;
  return total.toFixed(2);
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = Number(billInput.value);
    const numberOfPeople = Number(amountPeopleInput.value);
    if (numberOfPeople) {
      amountValue.textContent = calcTip(value, numberOfPeople);
      totalValue.textContent = calcTotal(value, numberOfPeople);
      message.classList.add("hidden");
    } else {
      message.classList.remove("hidden");
    }
  }
});

amountPeopleInput.addEventListener("input", function (event) {
  btnReset.disabled = false;
  btnReset.style.backgroundColor = "hsl(172, 67%, 45%)";
  btnReset.style.color = "hsl(183, 100%, 15%)";
});

document.querySelector(".reset").addEventListener("click", function () {
  billInput.value = "";
  amountPeopleInput.value = "";
  customPercentInput.value = "";
  totalValue.textContent = "0.00";
  amountValue.textContent = "0.00";
  for (let i = 0; i < btnAddPercent.length; i++) {
    btnAddPercent[i].className = "btn percent-value";
  }
  btnReset.disabled = true;
  btnReset.style.backgroundColor = "hsl(184, 14%, 56%)";
  btnReset.style.color = "hsl(186, 14%, 43%)";
});
