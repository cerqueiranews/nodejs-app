module.exports = function(app){
    app.get('/', function(req, res){
        var menu = new app.model.menu(app);
        menu.getAll(function(er, rs){
            res.render('site/home',{menu: rs});
        });
    });
}
