// routes/contactRoutes.js
const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
  } catch (err) {
    res.status(500).json({message: 'Error fetching contacts'})
  }
})

// GET a contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({message: 'Contact not found'})
    res.status(200).json(contact)
  } catch (err) {
    res.status(500).json({message: 'Error fetching contact'})
  }
})

module.exports = router

