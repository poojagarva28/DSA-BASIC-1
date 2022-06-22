console.clear();

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
    this.push = (ele) => {
      this.items.push(ele);
      this.size++;
    };
    this.pop = () => {
      if (this.size === 0) {
        return -1;
      } else {
        this.size--;
        return this.items.pop();
      }
    };
    this.peak = () => {
      if (this.size === 0) {
        return -1;
      } else {
        return this.items[this.size - 1];
      }
    };
  }
}

const isOperator = (ele) => {
  switch (ele) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
  }
  return false;
};

const pre_to_infix = (pre_fix) => {
  let s = new Stack();
  let n = pre_fix.length;
  for (let i = n - 1; i >= 0; i--) {
    if (isOperator(pre_fix[i])) {
      let op1 = s.items[s.size - 1];
      s.pop();
      let op2 = s.items[s.size - 1];
      s.pop();
      let temp = "(" + op1 + pre_fix[i] + op2 + ")";
      s.push(temp);
    } else {
      s.push(pre_fix[i] + "");
    }
  }
  let ans = "";
  while (s.size > 0) {
    ans += s.pop();
  }
  return ans;
};

let pre_fix = "*-A/BC-/AKL";
console.log(`given prefix expression : ${pre_fix}`);
console.log(`infix expression of it : ${pre_to_infix(pre_fix)}`);

/* STEPS 
Read the Prefix expression in reverse order (from right to left)
If the symbol is an operand, then push it onto the Stack
If the symbol is an operator, then pop two operands from the Stack 
Create a string by concatenating the two operands and the operator between them. 
string = (operand1 + operator + operand2) 
And push the resultant string back to Stack
Repeat the above steps until the end of Prefix expression.
At the end stack will have only 1 string i.e resultant string
*/
