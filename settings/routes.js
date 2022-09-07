module.exports = (app) => {
    const usersController = require('./../controlers/usersControler')

    app.route('/api/users')
    .get(usersController.getAllUsers)

    app.route('/api/sign')
    .post(usersController.sign)
}