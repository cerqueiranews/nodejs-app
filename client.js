var http = require('http');
var config = {
    hostname: 'localhost',
    port: 3000,
    method: 'get',
    path: '/admin/menu',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

var client = http.request(config, function(rs){
    console.log('Code: ' + rs.statusCode);
    rs.on('data', function(body){
        console.log('Body: ' + body);
    });
});

client.end();
