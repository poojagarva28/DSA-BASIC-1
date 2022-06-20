function towerOfHanoi(n, A, C, B) {
  if (n == 0) {
    return;
  }
  towerOfHanoi(n - 1, A, B, C);
  console.log("Move disk " + n + " from rod " + A + " to rod " + C);
  towerOfHanoi(n - 1, B, C, A);
}

var n = 2;
towerOfHanoi(n, "A", "C", "B");
