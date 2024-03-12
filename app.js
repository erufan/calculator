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
let allNumber = [];
let action = "";

let noAction = true; // useOFEqual = false  useOfAction = false

//core of calculator

function render(number) {
  if ((noAction === true) & (useOFEqual === false)) {
    numbers += number;
    answerEl.textContent = numbers;
  } else if ((noAction === false) & (useOFEqual === false)) {
    useOfAction = false;
    numbers2 += number;
    let numbers2Ui = "";
    numbers2Ui = number;
    answerEl.textContent += numbers2Ui;
  } else if ((noAction === false) & (useOFEqual === true)) {
    useOfAction = false;
    useOFEqual = false;
    noAction = true;
    answer = "";
    numbers = "";
    numbers2 = "";
    numbers += number;
    answerEl.textContent = numbers;
  }
}

// related to when u click bottons

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

let useOfAction = false;
plusBtn.addEventListener("click", function () {
  if (numbers2 === "") {
    allNumber.push(numbers);
  } else if (numbers === "") {
    allNumber.push(numbers2);
  }
  if (useOfAction === false) {
    if (action === "subtraction") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) + Number(-b)));
      allNumber.splice(0, allNumber.length - 1);
    }

    useOfAction = true;
    noAction = false;
    numbers2 = "";
    numbers = "";
    number = 0;
    answerEl.textContent += " + ";
    action = "addition";
  }
});
minusBtn.addEventListener("click", function () {
  if (numbers2 === "") {
    allNumber.push(numbers);
  } else if (numbers === "") {
    allNumber.push(numbers2);
  }
  if (useOfAction === false) {
    if (action === "addition") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) + Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    }

    useOfAction = true;
    noAction = false;
    numbers2 = "";
    numbers = "";
    number = 0;
    answerEl.textContent += " - ";
    action = "subtraction";
  }
});

let useOFEqual = false;

equalBtn.addEventListener("click", function () {
  if (numbers2 === "") {
    allNumber.push(numbers);
  } else if (numbers === "") {
    allNumber.push(numbers2);
  }

  if (action === "addition") {
    let addition = allNumber.reduce((a, b) => Number(a) + Number(b));
    answerEl.textContent += ` = ${addition}`;
  } else if (action === "subtraction") {
    let subtraction = allNumber.reduce((a, b) => Number(a) + Number(-b));
    answerEl.textContent += ` = ${subtraction}`;
  }

  useOfAction = false;
  useOFEqual = true;
  allNumber = [];

  // now you can use minus and plus at same time for more tahn 2 number
});
