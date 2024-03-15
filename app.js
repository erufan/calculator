const minusBtn = document.getElementById("minus-btn");
const equalBtn = document.getElementById("equal-btn");
const plusBtn = document.getElementById("plus-btn");
const divisionBtn = document.getElementById("division-btn");
const productBtn = document.getElementById("product-btn");
const answerEl = document.getElementById("answer-el");
const btn = document.querySelectorAll(".btn");

const pattern = /[0-9]/;
let allNumber = [];
const allUi = [];

btn.forEach((c) =>
  c.addEventListener("click", function () {
    render(c.value);
  })
);

function render(number) {
  const lastClick = allUi[allUi.length - 1];
  if (lastClick && !pattern.test(lastClick) && !pattern.test(number)) return;
  allUi.push(number);
  answerEl.textContent = allUi.join("");
}

equalBtn.addEventListener("click", function () {
  answerEl.textContent += " = " + eval(allUi.join(""));
});
