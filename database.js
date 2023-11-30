var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/userDB";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("userDB");
  var myobj = { username: "jdwhite", password: "ready2Code4ever!" };
  dbo.collection("Users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("jdwhite inserted");
    db.close();
  });
});

function registeredLogin() {
  let user = document.getElementById("userName").value;
  let pwd = document.getElementById("password").value;
  if (user == "" && pwd == "") {
    alert("Enter a valid username and password !");
  } else {
    window.open("recommendations.html");
  }
}
