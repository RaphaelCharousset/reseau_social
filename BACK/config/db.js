const mongoose = require('mongoose')

const DB = "reseau-social"

mongoose
  .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.b1cbi.mongodb.net/' + DB + '?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB : ', err))
