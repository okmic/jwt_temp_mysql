const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const passport = require('passport')

const PORT = process.env.PORT | 5000

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(passport.initialize())
require('./middleware/passport')(passport)

const routes = require('./settings/routes')

routes(app)

app.listen(PORT, () => console.log('Server started on port: '+ PORT) )