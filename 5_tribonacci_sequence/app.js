function tribonacci(signature, n) {
  return n >= 3
    ? signature.concat(new Array(n - 3).fill(0)).reduce((prev, cur, index) => {
        if (index === 0 || index === 1 || index === 2) {
          prev.push(cur);
        } else {
          prev.push(prev[index - 1] + prev[index - 2] + prev[index - 3]);
        }
        return prev;
      }, [])
    : signature.splice(0, n);
}
