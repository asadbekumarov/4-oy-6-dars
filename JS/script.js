const ELinput1 = document.querySelector("#window1");
const ELinput2 = document.querySelector("#window2");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

const elInput3 = document.querySelector("#el-input3");

btn1.addEventListener("click", function () {
  calcPlus(+ELinput1.value, +ELinput2.value);
});
btn2.addEventListener("click", function () {
  calcMinus(+ELinput1.value, +ELinput2.value);
});
btn3.addEventListener("click", function () {
  calcIncrease(+ELinput1.value, +ELinput2.value);
});
btn4.addEventListener("click", function () {
  calcbolish(+ELinput1.value, +ELinput2.value);
});
btn5.addEventListener("click", function () {
  calcbolishqoldiq(+ELinput1.value, +ELinput2.value);
});

function calcPlus(num1, num2) {
  elInput3.value = num1 + num2;
}
function calcMinus(num1, num2) {
  elInput3.value = num1 - num2;
}
function calcIncrease(num1, num2) {
  elInput3.value = num1 * num2;
}
function calcbolish(num1, num2) {
  elInput3.value = num1 + num2;
}
function calcbolishqoldiq(num1, num2) {
  elInput3.value = num1 % num2;
}
