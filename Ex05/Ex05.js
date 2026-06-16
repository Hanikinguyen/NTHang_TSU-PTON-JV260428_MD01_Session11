let weight = Number(prompt("Nhập cân nặng (kg):"));
let height = Number(prompt("Nhập chiều cao (m):"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
  alert(`BMI = ${bmi.toFixed(2)}: Gầy`);
} 
else if (bmi < 25) {
  alert(`BMI = ${bmi.toFixed(2)}: Bình thường`);
} 
else if (bmi < 30) {
  alert(`BMI = ${bmi.toFixed(2)}: Thừa cân`);
} 
else {
  alert(`BMI = ${bmi.toFixed(2)}: Béo phì`);
}