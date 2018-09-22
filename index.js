const express = require('express')
const fs = require('fs')
const sm = require('sitemap');

const path = require('path')
const https = require('https')
const app = express()

const sitemap = sm.createSitemap({
    hostname: 'https://clover-company.cc',
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: [
        {
            url: '/', changefreq: 'daily', priority: 1, img: {
                url: "https://clover-company.cc/images/CloverLogo.png",
                caption: 'logo',
                title: 'Clover Company logo',
                geoLocation: 'Kiev, Ukraine',
            }
        },
        { url: '/blog/', changefreq: 'daily', priority: 0.5 },
        { url: '/about/', changefreq: 'monthly', priority: 0.2 },
        { url: '/app/', changefreq: 'weekly', priority: 0.7 },
        { url: '/contact-us/', changefreq: 'monthly', priority: 0.2 },
        { url: '/careers/', changefreq: 'monthly', priority: 0.2 },
        { url: '/how-it-works/', changefreq: 'weekly', priority: 0.7 },
        { url: '/social-networks/', changefreq: 'daily', priority: 0.3 }
    ]
});

app.use(express.static('public'));

app.get('/sitemap.xml', function(req, res) {
    sitemap.toXML(function(err, xml) {
        if (err) {
            return res.status(500).end();
        }
        res.header('Content-Type', 'application/xml');
        res.send(xml);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.listen(8080, () => console.log('HTTP Server running on port 80'))

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(8443, () => console.log('HTTPS Server running on port 443'))