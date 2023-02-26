const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const button = document.querySelector(".btn");
button.addEventListener("click", validate);

function validate() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  console.log(password, confirmPassword);
  if (password.value === "") {
    alert("Password cannot remain empty");
  }
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match. Please try again");
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
  } else {
    password.style.border = "1px solid blue";
    confirmPassword.style.border = "1px solid blue";
  }
}
