const express = require('express')
const fs = require('fs')
const path = require('path')
const https = require('https')
const app = express()

app.use(express.static('public'));
app.use(function (req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public.index.html'))
})


app.listen(80, () => console.log('HTTP Server running on port 80'))

app.listen(443, () => console.log('HTTPS Server running on port 443'))