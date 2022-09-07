module.exports = (app) => {
    const passport = require('passport')
    const usersController = require('./../controlers/usersControler')

    app.route('/api/users')
    .get(passport.authenticate('jwt', {session: false}), usersController.getAllUsers)

    app.route('/api/signup')
    .post(usersController.signup)

    app.route('/api/signin')
    .get(usersController.signin)
}