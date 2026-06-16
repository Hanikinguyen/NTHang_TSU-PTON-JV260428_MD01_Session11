let a = Number(prompt("Mời bạn nhập số a:"));
let b = Number(prompt("Mời bạn nhập số b:"));

let operator = prompt("Mời bạn nhập phép tính (+, -, *, /):");

let result;

if (operator === "+") {
  result = a + b;
} 
else if (operator === "-") {
  result = a - b;
} 
else if (operator === "*") {
  result = a * b;
} 
else if (operator === "/") {
  result = a / b;
} 
else {
  result = "Phép tính không hợp lệ";
}

alert(`Kết quả: ${result}`);