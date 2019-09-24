module.exports = {
    eAdmin: function(req, res, nex){
        if(req.isAuthenticated() && req.user.eAdmin == 1){
            return next()
        }
        req.flash("error_msg", "Você precisa ser um Admin para entrar aqui")
        res.redirect("/")
    }
}