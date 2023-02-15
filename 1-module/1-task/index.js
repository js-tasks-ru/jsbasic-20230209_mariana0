function factorial(n) {
  let result = 1;
  while (n--) {
    result *= n + 1;
  }
  return result;
}
