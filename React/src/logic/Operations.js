export default function operations(numb1, numb2, operator) {
  if (operator === "+") {
    return this.state.numb1 + this.state.numb2;
  }
  if (operator === "-") {
    return num1 - numb2;
  }
  if (operator === "x") {
    return numb1 * numb2;
  }
  if (operator === "÷") {
    if (numb2 !== "0") {
      return numb1 / numb2;
    }
  }
}
