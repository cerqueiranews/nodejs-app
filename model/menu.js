function MenuDAO(app){
    var conn = null;
    var menu = null;

    this.getConn = function(){
        if(!conn){
            return conn = app.config.database();
        }else{
            return conn;
        }
    }

    this.getAll = function(callback){
        var results = this.getConn().query('select * from menu', callback);
        this.getConn().end();
    }

    this.getOne = function(id, callback){
        var results = this.getConn().query('select * from menu where id = ' + id, callback);
        this.getConn().end();
    }

    this.save = function(object, callback){
        var menu = object;
        this.getConn().query('insert into menu set ?', menu, callback);
        this.getConn().end();
    }

    this.remove = function(object, callback){
        var menu = object;
        this.getConn().query('insert into menu set ?', menu, callback);
        this.getConn().end();
    }

}

module.exports = function(app){
    return MenuDAO;
}
