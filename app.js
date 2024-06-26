const equalBtn = document.getElementById("equal-btn");
const answerEl = document.getElementById("answer-el");
const btn = document.querySelectorAll(".btn");

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

function render(number) {
  const lastClick = input[input.length - 1];

  if (lastClick && !pattern.test(lastClick) && !pattern.test(number)) return;
  if (!lastClick && (number == "*" || number == "/")) return;
  if (is.equal && pattern.test(number)) input = [];

  input.push(number);

  let ui = [...input];
  ui.map((c) => {
    let index;
    if (c == "*") {
      index = ui.indexOf(c);
      ui.splice(index, 1, " × ");
    }
    if (c == "/") {
      index = ui.indexOf(c);
      ui.splice(index, 1, " ÷ ");
    }
  });

  answerEl.textContent = ui.join("");
  is.equal = false;
}

equalBtn.addEventListener("click", function () {
  let answer = eval(input.join(""));

  if (input.length > 0 && !is.equal) answerEl.textContent += " = " + answer;

  is.equal = true;
  input = [JSON.stringify(answer)];
});
