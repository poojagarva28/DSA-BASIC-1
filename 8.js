class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
    this.push = (element) => {
      this.items.push(element);
      this.length += 1;
    };
    this.pop = () => {
      if (this.length == 0) {
        return -1;
      }
      this.length -= 1;
      return this.items.pop();
    };
    this.peek = () => {
      if (this.length == 0) {
        return -1;
      }
      return this.items[this.length - 1];
    };
  }
}

let stack = new Stack();

let exp = "[()({})]";
// let exp = "[[()({})]";

let isBalanced = (exp) => {
  for (let i = 0; i < exp.length; i++) {
    let b = exp[i];
    if (b == "(" || b == "{" || b == "[") {
      stack.push(b);
      continue;
    }
    if (stack.length == 0) return false;
    let bracket = stack.pop();
    switch (b) {
      case ")":
        if (bracket == "[" || bracket == "{") {
          return false;
        }
        break;
      case "}":
        if (bracket == "[" || bracket == "(") {
          return false;
        }
        break;
      case "]":
        if (bracket == "(" || bracket == "{") {
          return false;
        }
        break;
    }
  }
  return stack.length == 0 ? console.log("yes") : console.log("no");
};

isBalanced(exp);
