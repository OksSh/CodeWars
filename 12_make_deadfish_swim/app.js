function parse(data) {
  let counter = 0;
  return data.split('').reduce((prev, cur) => {
    switch (cur) {
      case 'i':
        counter++;
        break;
      case 'd':
        counter--;
        break;
      case 's':
        counter *= counter;
        break;
      case 'o':
        prev.push(counter);
        break;
    }

    return prev;
  }, []);
}
