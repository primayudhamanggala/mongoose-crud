const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/book')

const book = require('./routes/book')
const customer = require('./routes/customer')
const transaction = require('./routes/transaction')

app.use(bodyParser.urlencoded({extended: true}))

app.use('/books', book)
app.use('/customers', customer)
app.use('/transactions', transaction)

app.listen(3000)
