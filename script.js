function validation() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let phoneNO = document.getElementById("phone-no").value;
  let password = document.getElementById("password").value;
  let comfirmPassword = document.getElementById("comfirm-password").value;

  //   firstName
  if (firstName == "") {
    document.getElementById("fname-msg").innerText = "*please enter first name";
    document.getElementById("first-name").classList.add("invalid");
    return false;
  }
  if (firstName.length < 2) {
    document.getElementById("fname-msg").innerText =
      "*please enter 2 or more letters";
    document.getElementById("first-name").classList.add("invalid");

    return false;
  }
  if (!isNaN(firstName)) {
    document.getElementById("fname-msg").innerText =
      "*please enter Alphabat only";
    document.getElementById("first-name").classList.add("invalid");

    return false;
  } else {
    document.getElementById("fname-msg").innerText = "";
    document.getElementById("first-name").classList.remove("invalid");
    document.getElementById("first-name").classList.add("valid");
  }

  //    lastName
  if (lastName == "") {
    document.getElementById("lname-msg").innerText = "*please enter last name";
    document.getElementById("last-name").classList.add("invalid");

    return false;
  }
  if (lastName.length < 2) {
    document.getElementById("lname-msg").innerText =
      "*please enter 2 or more letter";
    document.getElementById("last-name").classList.add("invalid");

    return false;
  }
  if (!isNaN(lastName)) {
    document.getElementById("lname-msg").innerText =
      "*please enter alpabat only";
    document.getElementById("last-name").classList.add("invalid");

    return false;
  } else {
    document.getElementById("lname-msg").innerText = "";
    document.getElementById("last-name").classList.remove("invalid");
    document.getElementById("last-name").classList.add("valid");
  }

  //   email
  if (email == "") {
    document.getElementById("email-msg").innerText = "*please enter Email";
    document.getElementById("email").classList.add("invalid");
    return false;
  } else {
    document.getElementById("email-msg").innerText = "";
    document.getElementById("email").classList.remove("invalid");
    document.getElementById("email").classList.add("valid");
  }

  //   phoneNO
  if (phoneNO == "") {
    document.getElementById("phone-no-msg").innerText =
      "*please enter phone no";
    document.getElementById("phone-no").classList.add("invalid");
    return false;
  }
  if (isNaN(phoneNO)) {
    document.getElementById("phone-no-msg").innerText =
      "*please enter 0-9 numbers";
    document.getElementById("phone-no").classList.add("invalid");
    return false;
  }
  if (phoneNO.length < 10) {
    document.getElementById("phone-no-msg").innerText =
      "*please enter 11 digits";
    document.getElementById("phone-no").classList.add("invalid");
    return false;
  } else {
    document.getElementById("phone-no-msg").innerText = "";
    document.getElementById("phone-no").classList.remove("invalid");
    document.getElementById("phone-no").classList.add("valid");
  }

  //   password
  if (password == "") {
    document.getElementById("password-msg").innerText =
      "*please enter Password";
    document.getElementById("password").classList.add("invalid");

    return false;
  }
  if (password.length < 7) {
    document.getElementById("password-msg").innerText = "*password is to short";
    document.getElementById("password").classList.add("invalid");
    return false;
  }
  if (password.search(/[0-9]/) == -1) {
    document.getElementById("password-msg").innerText =
      "*must use {A-Z}, {a-z}, {0-9}, {@,!,#,$ etc.}";
    document.getElementById("password").classList.add("invalid");

    return false;
  }
  if (password.search(/[a-z]/) == -1) {
    document.getElementById("password-msg").innerText =
      "*must use {A-Z}, {a-z}, {0-9}, {@,!,#,$ etc.}";
    document.getElementById("password").classList.add("invalid");

    return false;
  }
  if (password.search(/[A-Z]/) == -1) {
    document.getElementById("password-msg").innerText =
     "*must use {A-Z}, {a-z}, {0-9}, {@,!,#,$ etc.}";
    document.getElementById("password").classList.add("invalid");

    return false;
  }
  if (password.search(/[!\@\#\$\*\-\_]/) == -1) {
    document.getElementById("password-msg").innerText =
      "*must use uppercase{A-Z}. lowercase{a-z}, Numbers{0-9}, Symbols{@,- etc.";
    document.getElementById("password").classList.add("invalid");

    return false;
  } else {
    document.getElementById("password-msg").innerText = "";
    document.getElementById("password").classList.remove("invalid");
    document.getElementById("password").classList.add("valid");
  }

  //   comfirmPassword
  if (comfirmPassword == "") {
    document.getElementById("comfirm-password-msg").innerText =
      "*please enter comfirm password";
    document.getElementById("comfirm-password").classList.add("invalid");

    return false;
  }
  if (comfirmPassword != password) {
    document.getElementById("comfirm-password-msg").innerText =
      "comfirm Password didn't match";
    document.getElementById("comfirm-password").classList.add("invalid");

    return false;
  } else {
    document.getElementById("comfirm-password-msg").innerText = "";
    document.getElementById("comfirm-password").classList.remove("invalid");
    document.getElementById("comfirm-password").classList.add("valid");
  }
}
