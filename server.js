var express = require("express"),
serveStatic = require('serve-static'),
app = express()

let p = 3006

app.listen(p,() => console.log(`Is your name ${p}?`))
app.use(serveStatic('public'))