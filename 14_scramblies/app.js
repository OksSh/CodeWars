// function scramble(str1, str2) {
//   let arr1 = str1.split('');
//   let arr2 = str2.split('');
//   let targetArray = [];

//   return arr2.every((targetItem) => {
//     let index = targetArray.indexOf(targetItem);
//     let isEqual =
//       index >= 0
//         ? true
//         : arr1.filter((item) => item == targetItem).length >=
//           arr2.filter((item) => item == targetItem).length;

//     if (isEqual) {
//       targetArray.push(targetItem);
//       return true;
//     }
//     return false;
//   });
// }

function scramble(str1, str2) {
  let occurences = str1.split('').reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  return str2.split('').every((character) => --occurences[character] >= 0);
}

scramble('helllpo', 'hel');
