// SOLUTIONS FROM CODESIGNAL

// ADD TWO DIGITS
// function addTwoDigits(n) {
//   let d = 0;
//   let a = n.toString().split("");
//   let b = a.map((x) => {
//     d += Number(x);
//     return d;
//   });
//   console.log(d);
// }
// addTwoDigits(13);

//LARGEST NUMBER
// function largestNumber(n) {
//   let a = [];
//   for (let i = 0; i < n; i++) {
//     a += 9;
//     console.log(a);
//   }
//   return Number(a);
// }
// largestNumber(4);

//CANDIES
// function candies(n, m) {
//   let d = parseInt(m / n) * n;
//   console.log(d);
// }
// candies(4, 15);

//SEATS IN THEATER
function seatsInTheater(nCols, nRows, col, row) {
  let a = nCols * nRows;
  let b = nCols * col;
  let c = nRows * row;
  let d = b - c;
  let e = a - b;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}
seatsInTheater(13, 6, 8, 3);
