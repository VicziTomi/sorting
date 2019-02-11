let tomb = [4, 9, 1, 4, 2, 5, 8];

for (let i = 0; i < tomb.length; i++) {
  for (let j = 0; j < tomb.length; j++) {
    if (tomb[i] > tomb[j]) {
      let temp = tomb[j];
      tomb[j] = tomb[i];
      tomb[i] = temp;
    }
  }
}
console.log(tomb);
