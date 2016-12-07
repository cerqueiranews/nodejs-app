module.exports = function(app){

    app.get('/admin/menu', function(req, res){
        var menu = new app.model.menu(app);
        menu.getAll(function(er, rs){
            res.format({
                html: function(){
                    res.render('admin/menu/lista', {menu: rs});
                },
                json: function(){
                    res.json(rs);
                }
            });
        });
    });

    app.get('/admin/menu/novo', function(req, res){
        res.format({
            html: function(){
                res.render('/admin/menu/novo');
                return;
            },
            json: function(){
                res.status(400).json({error: 'Format bad request.'});
                return;
            }
        });
    });

    app.post('/admin/menu/novo', function(req, res){
        var menu = new app.model.menu(app);

        req.assert('nome', 'O nome não pode ser vazio!').notEmpty();
        var errors = req.validationErrors();
        if(errors){
            res.format({
                html: function(){
                    res.status(400).render('/admin/menu/novo');
                    return;
                },
                json: function(){
                    res.status(400).json(errors);
                    return;
                }
            });
        }

        var form = req.body;
        menu.save(form, function(er, rs){
            if(er) return res.status(400).json(er);
            res.redirect('/admin/menu');
        });
    });
}
