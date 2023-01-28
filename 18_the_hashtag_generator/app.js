function generateHashtag(str) {
  let array = str
    .trim()
    .split(' ')
    .filter((item) => item);

  if (array.length > 0) {
    let hashtag = array.reduce(
      (prev, cur) => {
        prev += cur[0].toUpperCase() + cur.slice(1);
        console.log(prev);
        return prev;
      },
      array[0][0] == '#' ? '' : '#'
    );

    if (hashtag.length <= 140) {
      return hashtag;
    }
  }
  return false;
}
