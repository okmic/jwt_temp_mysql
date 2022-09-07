const mysql = require('mysql2')
const config = require('./../dbenv')

exports.all = async (query, callback) => {
    try {
        const conn = await mysql.createConnection(config)
        await conn.execute(query, callback)

        console.log('done')
        conn.end()
        return 
    }
    catch (e) {
        console.error(e)
    }
}

exports.send = (query, callback) =>  {
    try {

        const conn =  mysql.createConnection(config)

        conn.query(query, callback)
        
        console.log('done')
        
        conn.end()

        return
    }
    catch (e) {
        console.error(e)
    }
}