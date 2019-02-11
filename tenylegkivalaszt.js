let tomb = [4, 1, 5, 4, 9, 3, 8, 2];
// let max = Math.max(...tomb);
// let maxID = tomb.indexOf(Math.max(...tomb));

for (let z = 0; z < tomb.length; z++) {
  let max = Math.max(...tomb);
  if (max < tomb[z]) {
    let temp = tomb[z];
    tomb[z] = max;
    max = temp;
  }
}

console.log(tomb);
