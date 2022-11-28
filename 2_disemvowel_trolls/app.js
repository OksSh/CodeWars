function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let array = str.split('');

  for (let i = 0; i < vowels.length; i++) {
    array = array.filter((item) => item.toLowerCase() !== vowels[i]);
  }

  return array.join('');
}
