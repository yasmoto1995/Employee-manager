var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
let MongoClient = require("mongodb").MongoClient;
const e = require("express");
var ObjectId = require("mongodb").ObjectId;

var url =
  "mongodb+srv://user:if4zEWLcMZsqnKY@employeedb.qwpku.mongodb.net/EmployeeDB?retryWrites=true&w=majority";

const PORT = 7000;

const app = express();
var router = express.Router();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.post("/addRecord", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("EmployeeDB");
    dbo
      .collection("employees")
      .find({ $or: [{ email: req.body.email }, { contact: req.body.contact }] })
      .toArray(function (err, result) {
        if (err) throw err;
        if (result[0]) {
          res.status(401).send("User Already Exists");
        } else {
          dbo.collection("employees").insertOne(
            {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              contact: req.body.contact,
              address: req.body.address,
              dept: req.body.dept,
              role: req.body.role,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              country: req.body.country,
              src: req.body.src
            },
            function (err, result) {
              if (err) throw err;
              else res.status(200).send("Record Added Successfully");
              db.close();
            }
          );
        }
      });
  });
});

app.post("/editRecord", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("EmployeeDB");
    var myquery = { _id: new ObjectId(req.body.id) };
    var newvalues = {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        dept: req.body.dept,
        role: req.body.role,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        src: req.body.src
      },
    };
    dbo
      .collection("employees")
      .updateOne(myquery, newvalues, function (err, result) {
        if (err) throw err;
        else if (result["modifiedCount"] != 0)
          res.status(200).send("Record Edited Successfully");
        else res.status(401).send("Could not update record");
        db.close();
      });
  });
});

app.post("/isLoginUserExists", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("EmployeeDB");
    var query = { email: req.body.email, password: req.body.password };
    dbo
      .collection("credentials")
      .find(query)
      .toArray(function (err, result) {
        if (err) throw err;
        if (result[0]) res.status(200).send("User Authenticated");
        //res.send("User Authenticated");
        else res.status(401).send("Invalid User");
        db.close();
      });
  });
});

app.post("/getAllData", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("EmployeeDB");
    dbo
      .collection("employees")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send({
          result,
        });
        db.close();
      });
  });
});

//mongodb+srv://user:if4zEWLcMZsqnKY@employeedb.qwpku.mongodb.net/EmployeeDB?retryWrites=true&w=majority

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Listening on Port " + PORT);
});
