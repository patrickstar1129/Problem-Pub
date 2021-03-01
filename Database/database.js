const mongoose = require('mongoose');
const MONGO_PASSWORD = require('../config.js')

const CONNECTION_URL = `mongodb+srv://patrickng1129:${MONGO_PASSWORD}@cluster0.mtnwd.mongodb.net/ProblemPub?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Successfully connected to MongoDB Atlas'))
.catch((err) => console.log(err.message))

let problemSchema = mongoose.Schema({
  name: String,
  description: String,
  difficulty: String,
  status: String,
  hint: String,
  complexity: String
})

let Problem = mongoose.model('Problem', problemSchema)


module.exports = {Problem};