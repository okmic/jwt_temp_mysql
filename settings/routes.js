module.exports = (app) => {
    const indexController = require('./../controlers/indexControler')

    const usersController = require('./../controlers/usersControler')

    app.route('/').get(indexController.index)
    app.route('/users').get(usersController.users)
    app.route('/add-users').post(usersController.addUsers)
}