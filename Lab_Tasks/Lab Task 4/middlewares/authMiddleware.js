function requireLogin(req, res, next) {
    if (!req.session.user) return res.redirect('/login');
    next();
  }
  
  function requireAdmin(req, res, next) {
    if (!req.session.user || !req.session.user.isAdmin) {
      return res.render('Forbidden: Admins only');
    }
    next();
  }
  
  module.exports = { requireLogin, requireAdmin };