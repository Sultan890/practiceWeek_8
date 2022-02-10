document.getElementById('main-form').addEventListener("submit", checkFrom);

function checkFrom(event) {
  event.preventDefault();
  var el =document.getElementById('main-form');

  var name = el.name.value;
  var surname = el.surname.value;
  var pass = el.password.value;
  var repass = el.repass.value;

  // console.log(name + " " + surname + " " + pass);
  var fail = "";

  if (name == ""||surname =="" || pass=="") {
    fail = "fill out the form";
  }
  else if (name.length <= 1 || name.length > 50) {
    fail = "enter the correct name";
  }
  else if (repass != pass) {
    fail = "the password must match";
  }
  else if (pass.split("&").length > 1) {
    fail = "invalid password";
  }

  if (fail != "") {
    document.getElementById('error').innerHTML = fail;

  }
else {
  alert("all data is filled in correctly");

}

}
