module.exports = function reverse (n) {
  if (n < 0) {
      n = Math.abs(n);
  }
  const result = n.toString().split('').reverse().join('');
  return Number(result);
}
