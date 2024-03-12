const minusBtn = document.getElementById("minus-btn");
const equalBtn = document.getElementById("equal-btn");
const plusBtn = document.getElementById("plus-btn");
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
const divisionBtn = document.getElementById("division-btn");
const zeroBtn = document.getElementById("zero-btn");
const productBtn = document.getElementById("product-btn");
const answerEl = document.getElementById("answer-el");

let answer = "";
let numbers = "";
let numbers2 = "";

let noAction = true; // useOFEqual = false  useOfPlus = false
function render(number) {
  if ((noAction === true) & (useOFEqual === false)) {
    numbers += number;
    answerEl.textContent = numbers;
  } else if ((noAction === false) & (useOFEqual === false)) {
    numbers2 += number;
    answerEl.textContent = `${numbers} + ${numbers2}`;
  } else if ((noAction === false) & (useOFEqual === true)) {
    useOfPlus = false;
    useOFEqual = false;
    noAction = true;
    answer = "";
    numbers = "";
    numbers2 = "";
    numbers += number;
    answerEl.textContent = numbers;
  }
}

oneBtn.addEventListener("click", function () {
  render(1);
});

twoBtn.addEventListener("click", function () {
  render(2);
});

threeBtn.addEventListener("click", function () {
  render(3);
});

fourBtn.addEventListener("click", function () {
  render(4);
});

fiveBtn.addEventListener("click", function () {
  render(5);
});

sixBtn.addEventListener("click", function () {
  render(6);
});

sevenBtn.addEventListener("click", function () {
  render(7);
});

eightBtn.addEventListener("click", function () {
  render(8);
});

nineBtn.addEventListener("click", function () {
  render(9);
});

zeroBtn.addEventListener("click", function () {
  render(0);
});

let useOfPlus = false;
plusBtn.addEventListener("click", function () {
  if (useOfPlus === false) {
    useOfPlus = true;
    noAction = false;
    answerEl.textContent += " + ";
  }
});

let useOFEqual = false;

equalBtn.addEventListener("click", function () {
  answerEl.textContent =
    ` ${numbers} + ${numbers2} = ` + (Number(numbers) + Number(numbers2));

  useOFEqual = true;
});
