require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')


const path = require('path')
const fs = require('fs')
const util = require('util')


const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'ejs')


app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(require(path.join(__dirname, 'app', 'index.js')))

app.listen(process.env.PORT, () => {
  console.log('Express HTTP Service up')
})
