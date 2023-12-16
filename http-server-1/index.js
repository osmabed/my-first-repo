const express = require("express");
const body_parser = require("body-parser");
const port = 3000
// const express = require('express')
const app = express()


app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port)