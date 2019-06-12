const input = document.querySelector("textarea");
const resultBlock = document.querySelector(".result");

const engReg = /[a-zA-Z]/;
const rusReg = /[а-яА-Я]/;
const numReg = /^\d\. /;
const newlineReg = /\s*\n\s*/;

function process() {
  const arr = parseArray(input.value);
  arr.sort(sortArray);
  writeText(arr);
}

function writeText(array) {
  resultBlock.innerHTML = array
    .map((item, index) => index + 1 + ". " + item)
    .join("<br />");
}

function parseArray(str) {
  let arr = str.split(newlineReg);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(numReg, "");
  }
  return arr;
}

function sortArray(el1, el2) {
  if (compareLangs(el1[0], el2[0])) {
    return el1 > el2 ? 1 : -1;
  }
  return rusReg.test(el2) ? 1 : -1;
}

function compareLangs(a, b) {
  if (
    (engReg.test(a) && engReg.test(b)) ||
    (rusReg.test(a) && rusReg.test(b))
  ) {
    return true;
  }
  return false;
}
