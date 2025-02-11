import './App.css'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const contactRoutes = require('./routes/contactRoutes') // API routes

const app = express()

// Middleware
app.use(bodyParser.json())
app.use('/api/contacts', contactRoutes)

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/contactManagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB: ', err))

// Server Port
const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

