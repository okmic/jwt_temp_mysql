const express = require('express')
const app = express()
const bodyparser = require('body-parser')

const PORT = process.env.PORT | 5000

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

const routes = require('./settings/routes')

routes(app)

app.listen(PORT, () => console.log('Server started on port: '+ PORT) )