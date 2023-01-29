const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/ex-templating";

mongoose
  .connect(MONGO_URI)
  .then( console.log('Connected with Mongo'))
  .catch(error => console.log(error))