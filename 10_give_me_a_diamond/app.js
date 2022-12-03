function diamond(n) {
  if (n % 2 !== 0 && n > 0) {
    let diamond = [new Array(n).fill('*')];
    for (let i = n - 2; i > 0; i -= 2) {
      let arrayOfSpace = new Array(Math.floor((n - i) / 2)).fill(' ');
      let arrayOfStar = new Array(i).fill('*');
      let resultArray = arrayOfSpace.concat(arrayOfStar);
      diamond.push(resultArray);
      diamond.unshift(resultArray);
    }

    return diamond.map((item) => item.concat('\n').join('')).join('');
  } else {
    return null;
  }
}
