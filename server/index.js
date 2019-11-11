const app = require('express')()
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.use(bodyParser.json())

const dataRoutes = require('./routes/students')
app.use('/', dataRoutes)

app.listen(4000, () => {
    console.log("server started on port 4000")
})