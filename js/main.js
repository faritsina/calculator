function addNumbers(num1, num2) {
  return num1 + num2;
}

function calculateSum() {
  const firstInput = document.getElementById("firstNumber");
  const secondInput = document.getElementById("secondNumber");
  const resultDiv = document.getElementById("result");
  const resultValue = document.getElementById("resultValue");
  const errorDiv = document.getElementById("error");

  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(secondInput.value);

