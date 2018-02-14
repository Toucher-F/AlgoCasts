// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let charMapA = {};
//   let charMapB = {};
//   let check = true;
//   const lowerA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const lowerB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   for (let A of lowerA) {
//     if (!charMapA[A]) {
//       charMapA[A] = 1;
//     } else {
//       charMapA[A]++;
//     }
//   }
//   for (let B of lowerB) {
//     if (!charMapB[B]) {
//       charMapB[B] = 1;
//     } else {
//       charMapB[B]++;
//     }
//   }
//
//   for (let C of lowerA) {
//     if (charMapA[C] != charMapB[C]) {
//       check = false;
//       break;
//     }
//   }
//   for (let D of lowerB) {
//     if (charMapA[D] != charMapB[D]) {
//       check = false;
//       break;
//     }
//   }
//   return check;
// }

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] != bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
