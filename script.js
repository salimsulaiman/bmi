// mengakses element
let calculateForm = document.getElementById("calculate");
let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let notif = document.getElementById("notif");

weightInput.addEventListener("input", function () {
  if (this.value == 0) {
    this.value = "";
  }
  if (this.value < 0) {
    this.value = "";
  }
});
heightInput.addEventListener("input", function () {
  if (this.value == 0) {
    this.value = "";
  }
  if (this.value < 0) {
    this.value = "";
  }
});

weightInput.focus(); // membuat focus input saat pertama kali website direload

// membuat event
calculateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let bmi = {
    weight: weightInput.value,
    height: heightInput.value,
  };

  let result = bmi.weight / (bmi.height / 100) ** 2;

  console.log(result);

  // menentukan kategori
  let category = "";
  if (result < 18.5) {
    category = "Underweight";
  } else if (result >= 18.5 && result <= 24.9) {
    category = "Normal";
  } else if (result >= 25 && result <= 29.9) {
    category = "Overweight";
  } else if (result >= 30) {
    category = "Obesity";
  } else {
    category = "Unknown";
  }

  // reset form
  weightInput.value = "";
  heightInput.value = "";

  weightInput.focus();

  // menyisipkan text ke dalam element HTML
  notif.innerHTML = `Your BMI is <b>${result.toFixed(1)}</b> whic mean You are <b>${category}</b>`;
});
