function sumTwoSmallestNumbers(numbers) {
  let array = numbers.slice();
  let num1 = +array.splice(array.indexOf(Math.min(...array)), 1);
  let num2 = +array.splice(array.indexOf(Math.min(...array)), 1);
  return num1 + num2;
}
