require ('dotenv').config()
const mysql = require('mysql')


const con = mysql.createConnection({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    multipleStatements: true
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected in database')
})

module.exports = con