let recommendations = [];
let communityCount = [];

function communityCheck() {
  let greekCommunity = document.getElementById("selfless").checked;
  let fitCommunity = document.getElementById("confident").checked;
  let artistCommunity = document.getElementById("creative").checked;
  let entrepreneurCommunity = document.getElementById("disciplined").checked;
  let engineeringCommunity = document.getElementById("logical").checked;
  let sportsCommunity = document.getElementById("active").checked;
  let spiritualCommunity = document.getElementById("healing").checked;
  let eventCommunity = document.getElementById("extrovert").checked;
  let abroadCommunity = document.getElementById("adventurous").checked;
  let readingCommunity = document.getElementById("introvert").checked;
  let checked = 0;

  if (greekCommunity == true) {
    recommendations.push("greeklife");
    checked++;
  }
  if (fitCommunity == true) {
    recommendations.push("Fitness & Health");
    checked++;
  }
  if (artistCommunity == true) {
    recommendations.push("Team Artist");
    checked++;
  }
  if (entrepreneurCommunity == true) {
    recommendations.push("Entreprenuership");
    checked++;
  }
  if (engineeringCommunity == true) {
    recommendations.push("Engineering");
    checked++;
  }
  if (sportsCommunity == true) {
    recommendations.push("Sports");
    checked++;
  }
  if (spiritualCommunity == true) {
    recommendations.push("Spirtual/Religious");
    checked++;
  }
  if (eventCommunity == true) {
    recommendations.push("Event Planning");
    checked++;
  }
  if (abroadCommunity == true) {
    recommendations.push("Abroad");
    checked++;
  }
  if (readingCommunity == true) {
    recommendations.push("Book Club");
    checked++;
  }
  if (checked != 3) {
    alert("Please select only 3 ");
  } else {
    window.open("/recommendations.html");
  }
}

function stored() {
  //abroad
  document.getElementById("ac").style.display = "block"; //abroad
  document.getElementById("international").style.display = "block"; //image
  document.getElementById("btn1").style.display = "block"; //join button

  //entrepreneur
  document.getElementById("entrepreneurcommunity").style.display = "block"; //entrepreneur
  document.getElementById("business").style.display = "block"; //image
  document.getElementById("btn2").style.display = "block"; //join button

  //greek life
  document.getElementById("gc").style.display = "block";
  document.getElementById("greek").style.display = "block"; //image
  document.getElementById("btn3").style.display = "block"; //join button

  //engineering
  document.getElementById("ec").style.display = "block";
  document.getElementById("engineer").style.display = "block";
  document.getElementById("btn4").style.display = "block";

  //event planning
  document.getElementById("epc").style.display = "block";
  document.getElementById("event-planner").style.display = "block";
  document.getElementById("btn5").style.display = "block";

  //Fitness & Health
  document.getElementById("F&H").style.display = "block";
  document.getElementById("healthy").style.display = "block"; //image
  document.getElementById("btn6").style.display = "block"; //join button

  // spiritual
  document.getElementById("spiritual").style.display = "block";
  document.getElementById("spirit").style.display = "block"; //image
  document.getElementById("btn7").style.display = "block"; //join button

  //artist
  document.getElementById("art").style.display = "block";
  document.getElementById("artist").style.display = "block"; //image
  document.getElementById("btn8").style.display = "block"; //join button

  //sports
  document.getElementById("sports").style.display = "block";
  document.getElementById("athlete").style.display = "block"; //image
  document.getElementById("btn9").style.display = "block"; //join button

  //books
  document.getElementById("book").style.display = "block";
  document.getElementById("books").style.display = "block"; //image
  document.getElementById("btn10").style.display = "block"; //join button
}

function join() {
  let j1 = (document.getElementById("btn1").onclick = function () {
    window.open("Communites/communityFeed.html");
  });

  let j2 = (document.getElementById("btn2").onclick = function () {
    window.open("Communites/communityFeed.html");
  });

  let j3 = (document.getElementById("btn3").onclick = function () {
    window.open("Communites/communityFeed.html");
  });

  let j4 = (document.getElementById("btn4").onclick = function () {
    window.open("Communites/communityFeed.html");
  });

  let j5 = (document.getElementById("btn5").onclick = function () {
    window.open("Communites/communityFeed.html");
  });

  let j6 = (document.getElementById("btn6").onclick = function () {
    window.open("Communites/communityFeed.html");
    document.getElementById("newcommunity").innerHTML = "Fitness & Health";
  });

  let j7 = (document.getElementById("btn7").onclick = function () {
    window.open("Communites/communityFeed.html");
  });

  let j8 = (document.getElementById("btn8").onclick = function () {
    window.open("Communites/communityFeed.html");
  });

  let j9 = (document.getElementById("btn9").onclick = function () {
    window.open("Communites/communityFeed.html");
  });

  let j10 = (document.getElementById("btn10").onclick = function () {
    window.open("Communites/communityFeed.html");
  });
}

function rc() {
  window.open("/rc.html");
}
