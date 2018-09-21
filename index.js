const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public./ndex.html'))
})


app.listen(8080, () => console.log('HTTP Server running on port 8080'))
app.listen(8443, () => console.log('HTTPS Server running on port 8443'))
