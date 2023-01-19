function moveZeros(arr) {
  let sortArray = arr.filter((item) => item !== 0);
  return sortArray.concat(new Array(arr.length - sortArray.length).fill(0));
}
