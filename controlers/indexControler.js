const response = require('./../response')

exports.index = (req, res) => {
    response.status('hello my api', res)
}