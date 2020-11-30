const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/JS/:file', (req, res) => {
  var filename = req.params.file + '.js';
  console.log('Here it comes!' + filename);
  res.sendFile(__dirname + '/JS/' + filename);
})

app.get('/CSS/:file', (req, res) => {
  var filename = req.params.file + '.css';
  console.log('Here it comes!' + filename);
  res.sendFile(__dirname + '/CSS/' + filename);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
