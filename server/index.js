const express = require('express')
const mongoose = require('mongoose');
// const cors = require('cors');
const model = require('../Database/controllers.js')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json())

app.post('/api/posts', (req, res) => {
  model.save(req.body, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log('Successfully sent data to the database!')
    }
  })
})

app.get('/api/posts', (req, res) => {
  model.retrieve((err ,result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.get('/api/posts/id', (req, res) => {
  model.retrieveOne(req.query.id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.delete('/api/posts/delete', (req, res) => {
  model.deleteOne(req.query.id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.put('/api/posts/update', (req, res) => {
  console.log(req.body)
  model.updateOne(req.body, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})



// //passport.authenticate({'google', {
//   scope: ['profile'],
//   prompt: 'select_account'
//   }