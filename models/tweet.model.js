const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  user: {
    type: "String",
  },
  message: {
    type: "String",
  },
  createdAt: {
    type: "String",
  },
  fav: {
    type: "Boolean",
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
