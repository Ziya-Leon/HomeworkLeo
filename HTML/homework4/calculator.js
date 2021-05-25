let inputclick = document.querySelector(".inputscreen");
let operator = document.querySelectorAll(".operator");
let num = document.querySelectorAll(".num");
let clear = document.querySelector(".delete");
let equal = document.querySelector(".equal");

num.forEach(function (element) {
    element.onclick = function (e) {
        if (inputclick.value == "0") {
            inputclick.value = ""
        }
        inputclick.value += this.textContent;
    }
});

clear.onclick = function (element) {
    inputclick.value = "0"
};

operator.forEach(function (element) {
            element.onclick = function (e) {
            inputclick.value+=this.textContent;
        }
    });

equal.onclick = function (element) {
        inputclick.value = eval(inputclick.value);
    };