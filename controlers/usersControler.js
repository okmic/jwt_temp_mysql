const response = require('./../response')
const db = require('./../settings/db')
const bcrypt = require('bcryptjs')

exports.getAllUsers = async (req, res) => {

    try {
        db.all('select `id`, `name`, `email` from users', (err, results, fields) => {
            if (err) {
                response.status(400, err, res)
            }
            response.status(200, results, res)
        })
    }
    catch (e) {
        console.error(e)
        response(500, e, res)
    }
}

exports.sign = (req, res) => {
    try {
        db.all(`select \`id\`, \`email\`, \`name\` from \`users\` where \`email\` = '${req.body.email}'`, (err, result) => {
            if (err) {
                response.status(400, err, res)
            } else if (typeof result !== 'undefined' && result.length > 0) {
                
                JSON.parse(JSON.stringify(result))
                .map((item) => {
                    response.status(302, `The user - ${req.body.email} is already in the database`, res)
                    return true
                })
                                
            } else {
                const salt = bcrypt.genSaltSync(15)
                const {name, email, password} = req.body

                db.send(`INSERT INTO \`users\`(\`name\`, \`email\`, \`password\`) VALUES ('${name}','${email}', '${bcrypt.hashSync(password, salt)}')`, (err, results, fields) => {
                    if(err) {
                        response.status(400, err, res)
                    }
                    response.status(200, {message: 'auth is true', results}, res) 
                })  
            }
        })


      
    }
    catch (e) {
        console.error(e)
        response(500, e, res)
    }

}