const equalBtn = document.getElementById("equal-btn");
const answerEl = document.getElementById("answer-el");
const btn = document.querySelectorAll(".btn");
const btnArray = [...btn].map((btn) => btn.value);
const pattern = /[0-9]/;
let input = [];
let is = {
  equal: false,
};

btn.forEach((c) =>
  c.addEventListener("click", function () {
    render(c.value);
  })
);

document.addEventListener("keydown", function (e) {
  const index = btnArray.indexOf(e.key);
  if (index !== -1) {
    render(btn[index].value);
    btn[index].classList.add("active");
  }
  if (e.key === "Enter" || e.key === "=") {
    equalBtn.click();
    equalBtn.classList.add("active");
  }
});

document.addEventListener("keyup", function (e) {
  const index = btnArray.indexOf(e.key);

  if (e.key === "Enter" || e.key === "=") {
    equalBtn.classList.remove("active");
    return;
  }
  if (index !== -1) {
    btn[index].classList.remove("active");
  }
});

function render(number) {
  const lastClick = input[input.length - 1];

  if (lastClick && !pattern.test(lastClick) && !pattern.test(number)) return;
  if (!lastClick && (number == "*" || number == "/")) return;
  if (is.equal && pattern.test(number)) input = [];

  input.push(number);
  arrangeAnswerBox();

  is.equal = false;
}

equalBtn.addEventListener("click", function () {
  let answer = eval(input.join(""));

  arrangeAnswerBox(answer);

  is.equal = true;
  input = [JSON.stringify(answer)];
});

const arrangeAnswerBox = function (answer = undefined) {
  let ui = [...input];
  const replacements = {
    "*": " × ",
    "/": " ÷ ",
    "+": " + ",
    "-": " - ",
  };
  const shouldDisplayAnswer = input.length > 0 && !is.equal && answer;

  if (shouldDisplayAnswer) {
    answerEl.textContent += " = " + answer;
    return;
  }

  ui = ui.map((c) => replacements[c] || c);

  answerEl.textContent = ui.join("");
};
