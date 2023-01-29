// Iteration 3: import tweets data
const Tweet = require("../models/tweet.model");

// Iteration 3: list tweets from file
module.exports.list = (req, res) => {
  Tweet.find()
    .then((tweets) => {
      res.render("pages/tweets", { tweets });
    })
    .catch((error) => console.log(error));
};
// Order tweets desc by date
// Iteration 4: filter tweets by user checking the query param 'name'

// Iteration 5: Create tweet validating body params

// Iteration 6: find tweet by id path param and delete it if exists
