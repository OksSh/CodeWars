function twoSum(numbers, target) {
  return numbers.reduce((prev, cur, index) => {
    for (let i = 0; i < numbers.length; i++) {
      if (cur + numbers[i] === target && index !== i) {
        prev = [index, i];
      }
    }
    return prev;
  }, []);
}
