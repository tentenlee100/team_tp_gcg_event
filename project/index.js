var express = require('express')
var app = express()
const axios = require('axios').default;
var path = require('path')
var fs = require('fs');

function render(filename, params) {
    var data = fs.readFileSync(filename, 'utf8');
    for (var key in params) {
      data = data.replace('{' + key + '}', params[key]);
    }
    return data;
  }

// app.set('views', './view')

app.use('/static',express.static('public'));

app.get('/', (req, res) => {
    res.send(render('view/index.html', {}));
})

app.get("/api", (req, res) => {
    const params = new URLSearchParams();
    params.append('activity_id', 13);
    params.append('account_type', 2);
    axios.post("http://l11-activity-web-hk.komoejoy.com/activity/vote/info", params).then((response) => {
        res.send(response.data)
    })
})

module.exports = app