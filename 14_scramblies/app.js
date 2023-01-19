function scramble(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let targetArray = [];

  return arr2.every((targetItem) => {
    let index = targetArray.indexOf(targetItem);
    let isEqual =
      index >= 0
        ? true
        : arr1.filter((item) => item == targetItem).length >=
          arr2.filter((item) => item == targetItem).length;

    if (isEqual) {
      targetArray.push(targetItem);
      return true;
    }
    return false;
  });
}
