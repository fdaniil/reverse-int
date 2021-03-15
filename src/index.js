module.exports = function reverse (n) {
    n = n+"";
  return +(n[0] == "-"? n.slice(1) : n ).split("").reverse().join("");
}
