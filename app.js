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
    allNumber = [];
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
  if ((numbers2 === "") & (numbers !== "")) {
    allNumber.push(numbers);
  } else if ((numbers === "") & (numbers2 !== "")) {
    allNumber.push(numbers2);
  }
  if (useOfAction === false) {
    if (action === "subtraction") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) + Number(-b)));
      allNumber.splice(0, allNumber.length - 1);
    } else if (action === "product") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) * Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    } else if (action === "division") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) / Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    }

    if (useOFEqual === true) {
      answerEl.textContent = allNumber[0];
    }

    useOfAction = true;
    noAction = false;
    useOFEqual = false;
    numbers2 = "";
    numbers = "";
    number = 0;
    answerEl.textContent += " + ";
    action = "addition";
  }
});
minusBtn.addEventListener("click", function () {
  if ((numbers2 === "") & (numbers !== "")) {
    allNumber.push(numbers);
  } else if ((numbers === "") & (numbers2 !== "")) {
    allNumber.push(numbers2);
  }
  if (useOfAction === false) {
    if (action === "addition") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) + Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    } else if (action === "product") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) * Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    } else if (action === "division") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) / Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    }

    if (useOFEqual === true) {
      answerEl.textContent = allNumber[0];
    }

    useOfAction = true;
    noAction = false;
    useOFEqual = false;
    numbers2 = "";
    numbers = "";
    number = 0;
    answerEl.textContent += " - ";
    action = "subtraction";
  }
});

productBtn.addEventListener("click", function () {
  if ((numbers2 === "") & (numbers !== "")) {
    allNumber.push(numbers);
  } else if ((numbers === "") & (numbers2 !== "")) {
    allNumber.push(numbers2);
  }
  if (useOfAction === false) {
    if (action === "addition") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) + Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    } else if (action === "subtraction") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) + Number(-b)));
      allNumber.splice(0, allNumber.length - 1);
    } else if (action === "division") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) / Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    }

    if (useOFEqual === true) {
      answerEl.textContent = allNumber[0];
    }

    useOfAction = true;
    noAction = false;
    useOFEqual = false;
    numbers2 = "";
    numbers = "";
    number = 0;
    answerEl.textContent += " × ";
    action = "product";
  }
});

divisionBtn.addEventListener("click", function () {
  if ((numbers2 === "") & (numbers !== "")) {
    allNumber.push(numbers);
  } else if ((numbers === "") & (numbers2 !== "")) {
    allNumber.push(numbers2);
  }
  if (useOfAction === false) {
    if (action === "addition") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) + Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    } else if (action === "subtraction") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) + Number(-b)));
      allNumber.splice(0, allNumber.length - 1);
    } else if (action === "product") {
      allNumber.push(allNumber.reduce((a, b) => Number(a) * Number(b)));
      allNumber.splice(0, allNumber.length - 1);
    }

    if (useOFEqual === true) {
      answerEl.textContent = allNumber[0];
    }

    useOfAction = true;
    useOFEqual = false;
    noAction = false;
    numbers2 = "";
    numbers = "";
    number = 0;
    answerEl.textContent += " ÷ ";
    action = "division";
  }
});

let useOFEqual = false;

equalBtn.addEventListener("click", function () {
  if ((numbers2 === "") & (numbers !== "")) {
    allNumber.push(numbers);
  } else if ((numbers === "") & (numbers2 !== "")) {
    allNumber.push(numbers2);
  }

  if (action === "addition") {
    let addition = allNumber.reduce((a, b) => Number(a) + Number(b));
    allNumber.push(addition);
    allNumber.splice(0, allNumber.length - 1);
    answerEl.textContent += ` = ${addition}`;
  } else if (action === "subtraction") {
    let subtraction = allNumber.reduce((a, b) => Number(a) + Number(-b));
    allNumber.push(subtraction);
    allNumber.splice(0, allNumber.length - 1);
    answerEl.textContent += ` = ${subtraction}`;
  } else if (action === "product") {
    let product = allNumber.reduce((a, b) => Number(a) * Number(b));
    allNumber.push(product);
    allNumber.splice(0, allNumber.length - 1);
    answerEl.textContent += ` = ${product}`;
  } else if (action === "division") {
    let division = allNumber.reduce((a, b) => Number(a) / Number(b));
    allNumber.push(division);
    allNumber.splice(0, allNumber.length - 1);
    answerEl.textContent += ` = ${division} `;
  }

  useOFEqual = true;
  numbers = "";
  numbers2 = "";
});
