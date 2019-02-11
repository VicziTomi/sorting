function bubi (tomb) {
  let temp;
  for (let i = 0; i < tomb.length - 1; i++) {
    for (let j = 0; j < tomb.length - i - 1; j++) {
      if (tomb[j] >= tomb[j + 1]) {
        temp = tomb[j + 1];
        tomb[j + 1] = tomb[j];
        tomb[j] = temp;
      }
    }
  }
  return tomb;
}

let tomb = [2, 5, 2, 7, 1];
let result = bubi(tomb);
console.log(result);
