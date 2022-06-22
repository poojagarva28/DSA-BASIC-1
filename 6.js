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

const postTopre = (post_fix) => {
  let s = new Stack();
  let n = post_fix.length;
  for (let i = 0; i < n; i++) {
    if (isOperator(post_fix[i])) {
      let op1 = s.items[s.size - 1];
      s.pop();
      let op2 = s.items[s.size - 1];
      s.pop();
      let temp = post_fix[i] + op2 + op1;
      s.push(temp);
    } else {
      s.push(post_fix[i] + "");
    }
  }
  let ans = "";
  while (s.size > 0) {
    ans += s.pop();
  }
  return ans;
};

let post_fix = "ABC/-AK/L-*";
console.log(`given postfix expression : ${post_fix}`);
console.log(`prefix expression of it : ${postTopre(post_fix)}`);

/* STEPS 
Read the Postfix expression from left to right
If the symbol is an operand, then push it onto the Stack
If the symbol is an operator, then pop two operands from the Stack 
Create a string by concatenating the two operands and the operator before them. 
string = operator + operand2 + operand1 
And push the resultant string back to Stack
Repeat the above steps until end of Postfix expression. 
*/
