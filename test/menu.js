var http = require('http');
var assert = require('assert');

describe('MenuRoute', function(){
    it('Lista Menu JSON', function(done){
        var config = {
            hostname: 'localhost',
            port: 3000,
            path: '/admin/menu',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        http.get(config, function(rs){
            var code = rs.statusCode;
            assert.equals(code, 200);
            done();
        });

    });
});
