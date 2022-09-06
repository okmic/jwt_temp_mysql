const response = require('./../response')
const db = require('./../settings/db')

exports.users = async (req, res) => {
    const users = await db.all('select * from users')

    response.status(users, res)
}

exports.addUsers = (req, res) => {
    
    const {name, email} =  req.query

    db.send(`INSERT INTO \`users\`(\`id\`, \`name\`, \`email\`) VALUES (NULL, '${name}','${email}')`) 

     response.status('writed', res) 
}