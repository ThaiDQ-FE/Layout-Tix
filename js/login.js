let inputTK = document.getElementById("login-tk-input");
let labelTK = document.getElementById("login-label-taikhoan");
let legendTK = document.getElementById("login-tk-legend");

let inputMK = document.getElementById("login-mk-input");
let labelMK = document.getElementById("login-label-matkhau");
let legendMK = document.getElementById("login-mk-legend");
inputTK.addEventListener("focus", () => {
  labelTK.classList.add("login-label-taikhoan");
  legendTK.classList.add("login-taikhoan-legend");
});
inputTK.addEventListener("blur", () => {
  if (inputTK.value == "") {
    labelTK.classList.remove("login-label-taikhoan");
    legendTK.classList.remove("login-taikhoan-legend");
  }
});

inputMK.addEventListener("focus", () => {
  labelMK.classList.add("login-label-matkhau");
  legendMK.classList.add("login-matkhau-legend");
});
inputMK.addEventListener("blur", () => {
  if (inputMK.value == "") {
    labelMK.classList.remove("login-label-matkhau");
    legendMK.classList.remove("login-matkhau-legend");
  }
});
