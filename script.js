const screenDisplay = document.querySelector("input");
const btn = document.querySelectorAll("button");
// console.log(btn);

// let accCalculation;
// function calculate(button) {
//   let value = button.textContent;

//   if (value === "Clear") {
//     calculation = [];
//     screenDisplay.textContent = ".";
//   } else if (value === "=") {
//     screenDisplay.textContent = eval(accCalculation);
//   } else {
//     calculation.push(value);
//     accCalculation = calculation.join("");
//     screenDisplay.textContent = accCalculation;
//     console.log(calculation);
//   }
// }
let calculation = "";

btn.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      calculation = eval(calculation);
      screenDisplay.value = calculation;
    } else if (e.target.innerHTML === "Clear") {
      calculation = "";
      screenDisplay.value = calculation;
    } else {
      console.log(e.target);
      calculation = calculation + e.target.innerHTML;
      screenDisplay.value = calculation;
    }
  })
);
