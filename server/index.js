const express = require('express')
const app = express()
const port = 3001
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
app.use(routes)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})