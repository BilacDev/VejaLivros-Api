// Entrypoint of application
require('dotenv').config()

const express = require('express')

const  app = express()


const port = process.env.PORT || 4000
// const configDb = require('./src/database/index')
const routes = require('./routes/routes')


app.use(routes)


app.listen(port, function() {
    console.log(`Server has started on http://localhost:${port}`)
})