function squareInputNumber() {
  let input = prompt("Enter a number to square:");

  function squaredNumber(number) {
    return number * number;
  }

  alert(squaredNumber(input));
}
