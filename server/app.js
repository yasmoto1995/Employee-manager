var express = require('express');
var ejs = require('ejs');
const cors = require('cors');
var bodyParser = require('body-parser')

const PORT = 7000;

const app = express();
var router = express.Router();

app.use(bodyParser.json())

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

app.post("/add", function (req, res) {

});


app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Listening on Port " +  PORT)
});
