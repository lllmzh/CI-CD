export function pow(x, n) {
  var result = x;
  for (var i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
