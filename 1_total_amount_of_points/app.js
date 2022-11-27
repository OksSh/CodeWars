function points(games) {
  let score = games.reduce((previousValue, currentValue, currentIndex) => {
    if (games[currentIndex][0] > games[currentIndex][2]) {
      previousValue += 3;
    } else if (games[currentIndex][0] === games[currentIndex][2]) {
      previousValue += 1;
    }

    return previousValue;
  }, 0);

  return score;
}
