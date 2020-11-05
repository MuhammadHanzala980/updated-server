const express = require("express");
const app = express.Router();
const reviews = require("./modules/authentication");

app.post("/put_review", (req, res) => {
    reviews
      .updateOne({ _id: req.body._id }, { $set: { reviews: req.body.review } })
      .then((response) => {
        res.send({
          data: response,
        });
      })
      .catch((err) => {
        res.send(err);
      });
});

module.exports = app;
