const db = require("./database.js");
const ObjectId = require("mongodb").ObjectID;

const save = (data, cb) => {
  const newProlem = new db.Problem({
    name: data.name,
    description: data.description,
    difficulty: data.difficulty,
    status: data.status,
    complexity: data.complexity
  });

  newProlem.save((err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const retrieve = (cb) => {
  db.Problem.find((err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const retrieveOne = (data, cb) => {
  db.Problem.find({ _id: ObjectId(data) }, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const deleteOne = (data, cb) => {
  db.Problem.remove({ _id: ObjectId(data) }, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};

const updateOne = (data, cb) => {
  db.Problem.findOneAndUpdate(
    { _id: ObjectId(data.id) },
    {
      name: data.name,
      description: data.description,
      difficulty: data.difficulty,
      status: data.status,
    },
    (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    }
  );
};

module.exports.save = save;
module.exports.retrieve = retrieve;
module.exports.retrieveOne = retrieveOne;
module.exports.deleteOne = deleteOne;
module.exports.updateOne = updateOne;
