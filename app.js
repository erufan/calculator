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

btn.forEach(
  (c) =>
    c.innerHTML.match(pattern) &&
    c.addEventListener("click", function () {
      render(c.value);
    })
);

let answer = "";
let numbers = "";
let numbers2 = "";
let action = "";

let noAction = true; // useOFEqual = false  useOfAction = false

//core of calculator

function render(number) {
  const lastClick = allUi[allUi.length - 1];
  if (lastClick && !pattern.test(lastClick) && !pattern.test(number)) return;
  allUi.push(number);
  answerEl.textContent = allUi.join("");
}

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
