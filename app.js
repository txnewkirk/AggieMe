function post() {
  let postMessage = document.getElementById("post").value;
  if (postMessage == "") {
    alert("Error: empty post!");
  } else {
    document.getElementById("newDiv").style.display = "block";
    document.getElementById("newPost").innerHTML = postMessage;

    var today = new Date();
    var time = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    theTime = time.toLocaleTimeString();
    document.getElementById("date").innerHTML = today;
    document.getElementById("time").innerHTML = theTime;
  }
}

function createCommunity() {
  window.open("/newCommunity.html");
}

function message() {
  window.open("/UserAccount/message.html");
}

function messageSent() {
  let validTo = document.getElementById("to").value;
  let validMessage = document.getElementById("message").value;
  if ((validTo && validMessage == "") || validMessage == "" || validTo == "") {
    alert("Error: empty recipient or message");
  } else {
    alert("Message Sent");
  }
}

function newCommunity() {
  document.getElementById("newcommunity");
}

function loadAll() {
  document.getElementById("newcommunity").style.display = "block";
  document.getElementById("newcommunity").innerHTML = "Fitness & Health";
}

function changeTheme() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

function like() {
  let count = 1;
  document.getElementById("like").innerHTML = count++ + " like ";
  document.getElementById("thumbsup").style.display = "block";
}

function nc() {
  let validname = document.getElementById("name").value;
  let validoname = document.getElementById("oname").value;
  let validbio = document.getElementById("bio").value;

  if ((validname && validoname == "") || validbio == "" || validoname == "") {
    alert("Error: empty name, ownername, or description");
  } else {
    alert("Message Sent");
  }
}
