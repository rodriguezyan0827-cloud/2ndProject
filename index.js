
// Password validation
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value !== confirm_password.value) {
    // Set an error message; this prevents form submission
    confirm_password.setCustomValidity("Passwords Don't Match");
  } 
  else {
    // Empty string means the input is valid
    confirm_password.setCustomValidity('');
  }
}
// Trigger validation on every change or keystroke
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// Form Interaction
function showForm(formID) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formID).classList.add("active");
}
 


