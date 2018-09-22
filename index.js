const express = require('express')
const fs = require('fs')
const path = require('path')
const https = require('https')
const app = express()

app.use(express.static('public'));
app.use(express.static('.well-known'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.listen(80, () => console.log('HTTP Server running on port 80'))

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(443, () => console.log('HTTPS Server running on port 443'))