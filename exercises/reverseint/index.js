// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   let minus = false;
//
//   if (n < 0) {
//     minus = true;
//   }
//
//   let reversed = Math.abs(n)
//     .toString()
//     .split("")
//     .reverse();
//
//   while (reversed.length > 1 && reversed[0] == "0") {
//     reversed.shift();
//   }
//
//   let result = parseInt(reversed.join(""));
//   if (minus === true) {
//     return -1 * result;
//   }
//   return result;
// }
