const UserModel = require('../models/user.model')
const ObjectID = require('mongoose').Types.ObjectId

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select('-password')
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(users)
  }
}

module.exports.userInfo = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send('ID unknown : ' + req.params.id)
  }

  UserModel
    .findById(req.params.id, (err, docs) => {
      if (!err) res.status(200).json(docs)
      else res.status(500).send('Error : ' + err)
    })
    .select('-password')
}