function digital_root(number) {
  let sum = String(number)
    .split('')
    .reduce((prev, cur) => {
      prev = +cur + prev;
      return prev;
    }, 0);

  if (String(sum).length > 1) {
    return digital_root(sum);
  }

  return sum;
}
