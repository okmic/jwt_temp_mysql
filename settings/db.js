const mysql = require('mysql2/promise')
const config = require('./../config')

exports.all = async (query) => {
    try {
        const conn = await mysql.createConnection(config)
        const [rows, fields] = await conn.execute(query)

        console.log('done')
        conn.end()

        return rows
    }
    catch (e) {
        console.error(e)
    }
}

exports.send = async (query) =>  {
    try {

        const conn = await mysql.createConnection(config)

        const res = conn.query(query)
        
        console.log('done')
        
        conn.end()

        return res
    }
    catch (e) {
        console.error(e)
    }
}