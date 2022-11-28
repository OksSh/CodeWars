function* nextElementGenerator(array) {
  while (true) {
    for (let i = 0; i < array.length; i++) {
      yield array[i];
    }
  }
}
