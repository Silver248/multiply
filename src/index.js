module.exports = function multiply(first, second) {
  let m = first*second;
  m.length = 100;
  let n = String(m);
  return(n);
}
