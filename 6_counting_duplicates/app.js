function duplicateCount(text) {
  let array = text
    .toLowerCase()
    .split('')
    .reduce((prev, cur, index, array) => {
      if (index !== array.lastIndexOf(cur) && !prev.includes(cur)) {
        prev.push(cur);
      }
      return prev;
    }, []);
  return array.length;
}
