let arr = [1, 2, 3, 4, 5, 6];

let i = 0;
let j = arr.length - 1;

console.log("original array:", arr);

while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}

console.log("reversed array:", arr);
