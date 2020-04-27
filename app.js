var express = require('express');
var reload = require('express-reload')
var app = express();


var pathProject = __dirname + '/project/'
app.use('/', reload(pathProject))

app.listen(3000, () => console.log('Listening on 9000'))