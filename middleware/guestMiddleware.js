function guestMiddleware(req, res, next){
    if(req.session.usersLogin == undefined){
        next();
    }else{res.send('esta pagina es para Usuarios no Registrados')}
};
module.exports= guestMiddleware;
//ATENCION, FALTA:
//DEBE REDIRIGIR A LA VISTA DE PERFIL DE USUARIO LOGUEADO