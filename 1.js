const arr = [1, 5, 3, -1, 3];
sum = 6;
console.log("sum of " + sum + " Pairs:");
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === sum) {
      console.log(arr[i], arr[j]);
    }
  }
}
