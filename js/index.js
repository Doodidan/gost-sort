let input = document.querySelector("textarea");

let mokka = ["Sort", "Привет", "Папа", "Data"];

function sortArray(el1, el2) {
  if (compareLangs(el1[0], el2[0])) {
    return el1 > el2 ? 1 : -1;
  }
  return rusReg.test(el2) ? 1 : -1;
}

const engReg = /[a-zA-Z]/;
const rusReg = /[а-яА-Я]/;

function compareLangs(a, b) {
  if (
    (engReg.test(a) && engReg.test(b)) ||
    (rusReg.test(a) && rusReg.test(b))
  ) {
    return true;
  }
  return false;
}

mokka.sort(sortArray);

console.log(mokka);
