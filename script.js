const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const restartBtn = document.getElementById("restartBtn");
const counter = document.getElementById("counter");
const input = document.getElementById("input");
const set = document.getElementById("set");

var inputVal = [];

const getInputVal = function () {
  inputVal.push(input.value);
  if (inputVal.length > 1) {
    inputVal.shift();
  }
};

set.addEventListener("click", getInputVal);

const orange = function () {
  counter.classList.remove("white");
  counter.classList.add("orange");
};

const white = function () {
  counter.classList.add("white");
  counter.classList.remove("orange");
};

addBtn.addEventListener("click", function () {
  var value = counter.innerHTML;

  value++;

  counter.innerHTML = value;

  if (inputVal == value) {
    orange();
    addBtn.disabled = true;
    removeBtn.disabled = true;
    input.style.color = "aliceblue";
    restartBtn.style.color = "aliceblue";
  }
});

removeBtn.addEventListener("click", function () {
  var value = counter.innerHTML;
  value--;

  counter.innerHTML = value;

  if (inputVal == value) {
    orange();
    addBtn.disabled = true;
    removeBtn.disabled = true;
    input.style.color = "aliceblue";
    restartBtn.style.color = "aliceblue";
  }
});

set.addEventListener("click", function () {
  input.style.color = "grey";
});

restartBtn.addEventListener("click", function () {
  counter.innerHTML = 0;
  addBtn.disabled = false;
  removeBtn.disabled = false;
  white();
  input.value = "";
  input.style.color = "rgb(255, 111, 0)";
  restartBtn.style.color = "rgb(255, 111, 0)";
});
