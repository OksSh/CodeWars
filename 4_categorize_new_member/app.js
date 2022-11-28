function openOrSenior(data) {
  return data.reduce((prev, cur) => {
    cur[0] >= 55 && cur[1] > 7
      ? (prev = prev.concat('Senior'))
      : (prev = prev.concat('Open'));
    return prev;
  }, []);
}
