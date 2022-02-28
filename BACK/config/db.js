const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.ru4ii.mongodb.net/reseau-social')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB : ', err))
  