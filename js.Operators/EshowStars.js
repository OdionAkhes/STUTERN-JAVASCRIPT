/** @format */

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let star = "";
    for (let stars = 0; stars < row; stars++) star += "*";
    console.log(star);

  }
    // return star
}

console.log(showStars(5));
