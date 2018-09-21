const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public./ndex.html'))
})


app.listen(3000, () => console.log('Server running on port 8080'))
