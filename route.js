//sign up
function signUp() {
  window.open("/signup.html", "/public/images/AggieMe.png");
}
// login
function userLogin() {
  window.open("/login.html");
}

//survey
function takeSurvey() {
  let fn = document.getElementById("firstname").value;
  let ln = document.getElementById("lastname").value;
  let major = document.getElementById("major").value;
  let grade = document.getElementById("classification").value;
  let usr = document.getElementById("username").value;
  let pwd = document.getElementById("userPassword").value;
  let validPwd = document.getElementById("passwordConfirm").value;
  let validClass = false;

  let freshamn = "freshman";
  let sophomore = "sophomore";
  let junior = "junior";
  let senior = "senior";

  if (
    grade != freshamn &&
    grade != sophomore &&
    grade != junior &&
    grade != senior
  ) {
    alert("Error, invalid classification");
  } else {
    validClass = true;
  }

  if (pwd === validPwd && validClass && pwd != "" && validPwd != "") {
    window.open("/survey.html");
  } else {
    alert("Passwords do not match!");
  }
}

//generate user profile
function profile() {
  window.open("/profile.html");
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function adminUser() {
  if (document.getElementById("admin").checked == true) {
    window.open("/admin.html");
  }
}

// let userInfo = {
//   firstname: document.getElementById("firstname"),
//   lastname: document.getElementById("lastname"),
//   major: document.getElementById("major"),
//   classification: document.getElementById("classification"),
//   username: document.getElementById("username"),
//   password: document.getElementById("userPassword"),
//   emailAddress: document.getElementById("email")
// }
