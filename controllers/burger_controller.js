var express = require("express");
var burg = require("../models/burger");
var router = express.Router();

//will use get, post, pull, and delete.
//get to retrieve from db,
//post to insert,
//put to update,
//and delete to delete burgers.

router.get("/", function(req, res) {
    cat.all(function(data) {
      var hbsObject = {
        burg: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });