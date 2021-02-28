
const db = require('./database.js')
const ObjectId = require('mongodb').ObjectID;

const save = (data, cb) => {
  const newProlem = new db.Problem({
    name: data.name,
    description: data.description,
    difficulty: data.difficulty,
    status: data.status
  })

  newProlem.save((err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result)
    }
  })
}

const retrieve = (cb) => {
  db.Problem.find((err, result) => {
    if (err) {
      cb(err)
    } else {

      cb(null, result)
    }
  })
}

const retrieveOne = (data, cb) => {
  db.Problem.find(({"_id":ObjectId(data)}), (err, result) => {
    if (err) {
      cb(err)
    } else {
      cb(null, result)
    }
  })
}

module.exports.save = save;
module.exports.retrieve = retrieve;
module.exports.retrieveOne = retrieveOne;