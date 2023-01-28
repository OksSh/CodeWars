function duplicateEncode(word) {
  return word
    .toUpperCase()
    .split('')
    .reduce((prev, cur, index, array) => {
      let isDublicateArray = array.filter((item) => item == cur);
      if (isDublicateArray.length > 1) {
        prev += ')';
      } else {
        prev += '(';
      }
      return prev;
    }, '');
}
