// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top endRow
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //  left column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

module.exports = matrix;

// function changeDirection(dir) {
//   switch (dir) {
//     case "right":
//       return "down";
//     case "down":
//       return "left";
//     case "left":
//       return "up";
//     case "up":
//       return "right";
//   }
// }
//
// function findNextPoint(dir, row, column) {
//   let point = { row, column };
//   switch (dir) {
//     case "right":
//       point.column += 1;
//       break;
//     case "down":
//       point.row += 1;
//       break;
//     case "left":
//       point.column -= 1;
//       break;
//     case "up":
//       point.row -= 1;
//       break;
//   }
//   return point;
// }
//
// function matrix(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push([]);
//     for (let j = 0; j < n; j++) {
//       arr[i].push(0);
//     }
//   }
//
//   // let arr = new Array(n);
//   // for (let i = 0; i < arr.length; i++) {
//   //   arr[i] = new Array(n);
//   // }
//   let row = 0;
//   let column = 0;
//   let dir = "right";
//   for (let count = 1; count <= n * n; count++) {
//     //console.log(dir);
//
//     arr[row][column] = count;
//
//     //console.log(arr);
//     if (
//       findNextPoint(dir, row, column).row >= n ||
//       findNextPoint(dir, row, column).column >= n
//     ) {
//       dir = changeDirection(dir);
//     } else if (
//       arr[findNextPoint(dir, row, column).row][
//         findNextPoint(dir, row, column).column
//       ] != 0
//     ) {
//       dir = changeDirection(dir);
//     }
//     //console.log(findNextPoint(dir, row, column));
//     row = findNextPoint(dir, row, column).row;
//     column = findNextPoint(dir, row, column).column;
//     //debugger;
//   }
//   return arr;
// }
