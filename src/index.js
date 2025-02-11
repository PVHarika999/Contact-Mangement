const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: {type: String, required: true},
  phone: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  address: {type: String, optional: true},
  createdAt: {type: Date, default: Date.now},
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact

