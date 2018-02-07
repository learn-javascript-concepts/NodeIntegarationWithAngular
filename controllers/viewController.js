(function(viewController) {

    viewController.init = function(app) {

        app.get("/", function(req, res) {
            res.render("layout", {});
        }); 

        app.get('/partials/:name', function (req, res) {
            var name = req.params.name;
            res.render('partials/' + name);
        });
        
    }

})(module.exports);