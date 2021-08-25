document.getElementById("submit").addEventListener("click", () => {
  // get email
  let gmail = document.getElementById("textField").value;

  // get password

  let password = document.getElementById("passField").value;
  if (gmail == "arif@zaman.com" && password == "asdfg") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid id or password");
  }
});
