function narcissistic(value) {
  let base = value.toString();
  return base.split('').reduce((prev, cur, index, array) => {
    prev += Math.pow(cur, base.length);
    return prev;
  }, 0) == value
    ? true
    : false;
}
